import { mostrarProductos } from "./productos.js";

document.addEventListener("DOMContentLoaded", () => {
    // ======== LOGIN Y NAVEGACIÓN ========
    const loginSection = document.getElementById("login-section");
    const app = document.getElementById("app");
    const content = document.getElementById("content");
    const form = document.getElementById("login-form");
    const errorMsg = document.getElementById("login-error");
    const logoutBtn = document.getElementById("logout-btn");

    const usuarios = [
        { usuario: "admin", password: "1234" },
        { usuario: "empleado", password: "5678" }
    ];

    // Estado inicial
    app.style.display = "none";
    if (errorMsg) errorMsg.style.display = "none";

    // LOGIN
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        const user = usuarios.find(u => u.usuario === username && u.password === password);

        if (user) {
            if (loginSection) loginSection.style.display = "none";
            if (app) app.style.display = "block";
            mostrarInicio();
        } else {
            if (errorMsg) errorMsg.style.display = "block";
        }
    });

    // LOGOUT
    logoutBtn.addEventListener("click", () => {
        if (app) app.style.display = "none";
        if (loginSection) loginSection.style.display = "block";
        form.reset();
        if (errorMsg) errorMsg.style.display = "none";
    });

    // NAVEGACIÓN (botones del menú)
    const btnInicio = document.getElementById("btn-inicio");
    const btnProductos = document.getElementById("btn-productos");
    const btnInventario = document.getElementById("btn-inventario");
    const btnUsuarios = document.getElementById("btn-usuarios");

    if (btnInicio) btnInicio.addEventListener("click", mostrarInicio);
    if (btnProductos) btnProductos.addEventListener("click", mostrarProductos);
    if (btnInventario) btnInventario.addEventListener("click", mostrarInventario);
    if (btnUsuarios) btnUsuarios.addEventListener("click", mostrarUsuarios);

    function mostrarInicio() {
        content.innerHTML = `
            <h3>🏠 Inicio</h3>
            <p>Bienvenido al panel principal del Sistema de Inventario y Ventas.</p>
            <p>Seleccione una opción del menú para administrar su minimarket.</p>
        `;
    }

    function mostrarInventario() {
        content.innerHTML = `
            <h3>📊 Inventario</h3>
            <p>En esta sección se mostrarán los productos con su stock actualizado.</p>
            <p>(En desarrollo)</p>
        `;
    }

    function mostrarUsuarios() {
        content.innerHTML = `
            <h3>👤 Usuarios</h3>
            <p>Gestione los usuarios del sistema.</p>
            <p>(En desarrollo)</p>
        `;
    }
});