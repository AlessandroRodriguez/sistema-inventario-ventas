/**
 * Simulación de productos (esto normalmente vendría de backend o localStorage)
 */
let inventory = [
    { id: 1, name: "Cuero vacuno", category: "Materia Prima", stock: 10 },
    { id: 2, name: "Hilo Nylon", category: "Accesorios", stock: 3 },
    { id: 3, name: "Pegamento", category: "Insumos", stock: 15 }
];

/**
 * Obtener inventario
 */
function getInventory() {
    return inventory;
}

/**
 * Actualizar inventario (entrada o salida de stock)
 * @param {number} productId
 * @param {number} quantityChange
 */
function updateInventory(productId, quantityChange) {
    let product = inventory.find(p => p.id === productId);
    if (product) {
        product.stock += quantityChange;
        if (product.stock < 0) product.stock = 0; // Evita negativos
        renderInventory();
    }
}

/**
 * Renderizar tabla de inventario
 */
function renderInventory() {
    const tbody = document.querySelector("#inventoryTable tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    getInventory().forEach(prod => {
        const tr = document.createElement("tr");

        // Marcar productos con stock bajo (< 5)
        if (prod.stock < 5) {
            tr.classList.add("low-stock");
        }

        tr.innerHTML = `
            <td>${prod.name}</td>
            <td>${prod.category}</td>
            <td>${prod.stock}</td>
        `;

        tbody.appendChild(tr);
    });
}

// Render inicial al cargar el DOM
document.addEventListener("DOMContentLoaded", renderInventory);