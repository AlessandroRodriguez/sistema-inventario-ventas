import { fetchAPI, API_URL } from "./api.js";

let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
let useAPI = false;

// 🔹 Detectar conexión con backend
(async () => {
  try {
    const res = await fetch(`${API_URL}/test`);
    if (res.ok) {
      useAPI = true;
      console.log("✅ Backend detectado: modo API activado (Inventario)");
      inventory = await fetchAPI("inventory");
    }
  } catch {
    console.warn("⚠️ No se detectó backend, usando localStorage (Inventario)");
  }
  renderInventory();
})();

// === Obtener inventario ===
export async function getInventory() {
  if (useAPI) return await fetchAPI("inventory");
  return inventory;
}

// === Actualizar stock ===
export async function updateInventory(id, change) {
  if (useAPI) {
    await fetchAPI(`inventory/${id}`, "PUT", { change });
  } else {
    const item = inventory.find(p => p.id === id);
    if (item) {
      item.stock += change;
      localStorage.setItem("inventory", JSON.stringify(inventory));
    }
  }
  renderInventory();
}

// === Renderizar tabla ===
export async function renderInventory() {
  const table = document.querySelector("#inventoryTable tbody");
  if (!table) return;

  const data = await getInventory();
  table.innerHTML = "";

  (data || []).forEach(p => {
    const lowStock = p.stock < 5 ? "low-stock" : "";
    table.innerHTML += `
      <tr class="${lowStock}">
        <td>${p.name}</td>
        <td>${p.category}</td>
        <td>${p.stock}</td>
        <td>
          <button onclick="adjustStock('${p.id}', 1)">+1</button>
          <button onclick="adjustStock('${p.id}', -1)">-1</button>
        </td>
      </tr>
    `;
  });
}

// === Ajustar stock desde la interfaz ===
window.adjustStock = async function (id, change) {
  await updateInventory(id, change);
};

// === Inicializar ===
document.addEventListener("DOMContentLoaded", renderInventory);
