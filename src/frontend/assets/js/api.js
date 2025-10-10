// ===== API Centralizada =====
const API_URL = "http://localhost:8000/api";

/**
 * Centraliza todas las peticiones al backend.
 */
async function fetchAPI(endpoint, method = "GET", body = null, extraHeaders = {}) {
  const headers = { "Content-Type": "application/json", ...extraHeaders };

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  try {
    const res = await fetch(`${API_URL}/${endpoint}`, options);
    const isJSON = res.headers.get("content-type")?.includes("application/json");
    const data = isJSON ? await res.json() : await res.text();

    if (!res.ok) {
      return {
        error: true,
        status: res.status,
        message: data?.message || `Error ${res.status}: ${res.statusText}`,
      };
    }

    return data;
  } catch (err) {
    console.error(`❌ [${method}] ${endpoint}:`, err.message);
    return { error: true, message: err.message || "Error de conexión" };
  }
}

// 🔹 Verificar conexión con el backend
async function checkAPIConnection() {
  const res = await fetchAPI("test"); // Llama al endpoint /api/test
  if (res?.message) {
    console.log("✅ Conexión exitosa con el backend:", res.message);
  } else {
    console.error("❌ Error al conectar con el backend:", res);
  }
}

export { fetchAPI, API_URL, checkAPIConnection };
