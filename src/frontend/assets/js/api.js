// ===== API Centralizada =====
const API_URL = "http://localhost:8000/api";

/**
 * Llama al backend de forma estándar y flexible
 * @param {string} endpoint - Ruta del recurso (ej: 'products')
 * @param {string} method - Método HTTP (GET, POST, PUT, DELETE)
 * @param {object|null} body - Datos a enviar (si aplica)
 * @param {object} extraHeaders - Headers adicionales (opcional)
 * @returns {Promise<object>} - Respuesta en formato JSON o error
 */
async function fetchAPI(endpoint, method = "GET", body = null, extraHeaders = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...extraHeaders,
  };

  // Si usas autenticación, descomenta y adapta:
  // const token = localStorage.getItem("token");
  // if (token) headers["Authorization"] = `Bearer ${token}`;

  const options = {
    method,
    headers,
  };
  if (body) options.body = JSON.stringify(body);

  try {
    const res = await fetch(`${API_URL}/${endpoint}`, options);
    const contentType = res.headers.get("content-type");
    let data = null;
    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    } else {
      data = await res.text();
    }
    if (!res.ok) throw new Error(data?.message || res.statusText);
    return data;
  } catch (err) {
    console.error("❌ Error en fetchAPI:", err);
    return { error: true, message: err.message };
  }
}