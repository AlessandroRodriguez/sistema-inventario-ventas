// ==== Importación de funciones del API ====
import { checkAPIConnection } from "./api.js";

// ==== Inicialización de la app ====
document.addEventListener("DOMContentLoaded", () => {
  showLoader();
  checkAPIConnection(); // ✅ Verifica conexión con el backend

  // Cargar header y footer
  loadComponent("components/header.html", "app-header")
    .then(() => loadComponent("components/footer.html", "app-footer"))
    .then(() => loadComponent("components/login-form.html", "app-content"))
    .catch((err) => showAlert("Error cargando la app", "error"))
    .finally(hideLoader);
});

// ==== Loader global ====
function showLoader() {
  let loader = document.getElementById("global-loader");
  if (!loader) {
    loader = document.createElement("div");
    loader.id = "global-loader";
    loader.className = "loader";
    document.body.appendChild(loader);
  }
  loader.style.display = "block";
}

function hideLoader() {
  const loader = document.getElementById("global-loader");
  if (loader) loader.style.display = "none";
}

// ==== Función para cargar componentes dinámicos ====
async function loadComponent(url, targetId) {
  try {
    showLoader();
    const res = await fetch(url);
    if (!res.ok) throw new Error("No se pudo cargar: " + url);
    const html = await res.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (error) {
    showAlert(`Error cargando componente: ${url}`, "error");
    console.error(error);
  } finally {
    hideLoader();
  }
}

// ==== Login básico (demo) ====
function login(event) {
  event.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "admin" && pass === "1234") {
    showAlert("Bienvenido, admin!", "exito");
    navigate("dashboard");
  } else {
    showAlert("Usuario o contraseña incorrectos", "error");
  }
}

// ==== Navegación entre secciones ====
function navigate(section) {
  showLoader();
  switch (section) {
    case "dashboard": {
      const today = new Date().toLocaleDateString();
      document.getElementById("app-content").innerHTML =
        '<div class="card">' +
        '<h2>Dashboard</h2>' +
        `<p>Bienvenido, ${today}</p>` +
        '<p>(Aquí irán las métricas con datos reales)</p>' +
        '</div>';
      break;
    }
    case "products":
      loadComponent("components/product-table.html", "app-content");
      break;
    case "sales":
      loadComponent("components/sales-form.html", "app-content");
      break;
    case "inventory":
      loadComponent("components/inventory-table.html", "app-content");
      break;
    default:
      showAlert("Sección no encontrada", "advertencia");
  }
  hideLoader();
}

// ==== Alertas amigables ====
function showAlert(msg, tipo = "exito") {
  let alert = document.getElementById("global-alert");
  if (!alert) {
    alert = document.createElement("div");
    alert.id = "global-alert";
    alert.className = "alert";
    document.body.appendChild(alert);
  }
  alert.className = `alert alert--${tipo}`;
  alert.textContent = msg;
  alert.style.display = "flex";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}

// ==== Seguridad básica frontend ====
// Limpia campos de formularios al navegar
function clearFormFields() {
  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
}

// ==== Utilidades globales ====
window.login = login;
window.navigate = navigate;

