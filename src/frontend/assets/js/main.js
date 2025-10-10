// ==== Importación de funciones del API ====
import { checkAPIConnection } from "./api.js";

// ==== Inicialización de la app ====
document.addEventListener("DOMContentLoaded", async () => {
  showLoader();
  
  try {
    await checkAPIConnection();
    
    // Cargar componentes
    await loadComponent("components/header.html", "app-header");
    await loadComponent("components/footer.html", "app-footer");
    await loadComponent("components/login-form.html", "app-content");
  } catch (err) {
    showAlert("Error cargando la app", "error");
    console.error(err);
  } finally {
    hideLoader();
  }
});

// ==== Loader global ====
let loaderCount = 0;

function showLoader() {
  loaderCount++;
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
  loaderCount = Math.max(0, loaderCount - 1);
  if (loaderCount === 0) {
    const loader = document.getElementById("global-loader");
    if (loader) loader.style.display = "none";
  }
}

// ==== Función para cargar componentes dinámicos ====
async function loadComponent(url, targetId) {
  showLoader();
  try {
    showLoader();
    const res = await fetch(url);
    if (!res.ok) throw new Error("No se pudo cargar: " + url);
    const html = await res.text();
    
    const target = document.getElementById(targetId);
    if (!target) throw new Error(`Elemento #${targetId} no encontrado`);
    
    target.innerHTML = ""; // ✅ Limpia antes de insertar
    target.innerHTML = html;
    
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
  
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");
  
  if (!userInput || !passInput) {
    showAlert("Formulario no encontrado", "error");
    return;
  }
  
  const user = userInput.value.trim();
  const pass = passInput.value.trim();
  
  if (!user || !pass) {
    showAlert("Complete todos los campos", "advertencia");
    return;
  }
  
  // ✅ Validación temporal para testeos
  if (user === "admin" && pass === "1234") {
    showAlert("Bienvenido, admin!", "exito");
    clearFormFields();
    navigate("dashboard");
  } else {
    showAlert("Usuario o contraseña incorrectos", "error");
  }
}

// ==== Navegación entre secciones ====
function navigate(section) {
  showLoader();
  clearFormFields();
  
  switch (section) {
    case "dashboard": {
      const today = new Date().toLocaleDateString("es-PE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      document.getElementById("app-content").innerHTML =
        '<div class="card">' +
        '<h2>Dashboard</h2>' +
        `<p>Bienvenido, ${today}</p>` +
        '<p>(Aquí irán las métricas con datos reales)</p>' +
        '</div>';
      hideLoader();
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
      hideLoader();
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

