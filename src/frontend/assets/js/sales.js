import { fetchAPI, API_URL } from "./api.js";
import { updateInventory } from "./inventory.js";

let sales = JSON.parse(localStorage.getItem("sales")) || [];
let useAPI = false;

// 🔹 Detectar conexión con backend
(async () => {
  try {
    const res = await fetch(`${API_URL}/test`);
    if (res.ok) {
      useAPI = true;
      console.log("✅ Backend detectado: modo API activado (Ventas)");
      sales = await fetchAPI("sales");
    }
  } catch {
    console.warn("⚠️ No se detectó backend, usando localStorage (Ventas)");
  }
  renderSales();
})();

// === Obtener ventas ===
export async function getSales() {
  if (useAPI) return await fetchAPI("sales");
  return sales;
}

// === Registrar venta ===
export async function addSale(sale) {
  if (useAPI) {
    await fetchAPI("sales", "POST", sale);
  } else {
    sales.push(sale);
    localStorage.setItem("sales", JSON.stringify(sales));
  }

  // Reducir stock en inventario
  await updateInventory(sale.productId, -sale.quantity);
  renderSales();
}

// === Renderizar tabla de ventas ===
export async function renderSales() {
  const table = document.querySelector("#salesTable tbody");
  if (!table) return;

  const data = await getSales();
  table.innerHTML = "";

  (data || []).forEach((s, i) => {
    table.innerHTML += `
      <tr>
        <td>${s.productName}</td>
        <td>${s.quantity}</td>
        <td>${s.total}</td>
        <td>${new Date(s.date).toLocaleString()}</td>
      </tr>
    `;
  });
}

// === Registrar nueva venta (botón/formulario) ===
window.registerSale = async function () {
  const productId = document.getElementById("sale-product").value;
  const quantity = parseInt(document.getElementById("sale-quantity").value);
  const total = parseFloat(document.getElementById("sale-total").value);

  const sale = {
    productId,
    productName: document.querySelector(`#sale-product option[value='${productId}']`)?.textContent || "Desconocido",
    quantity,
    total,
    date: new Date().toISOString(),
  };

  await addSale(sale);
  document.getElementById("sale-form").reset();
  alert("✅ Venta registrada correctamente");
};

// === Inicializar ===
document.addEventListener("DOMContentLoaded", renderSales);
// Cargar productos en el formulario de ventas