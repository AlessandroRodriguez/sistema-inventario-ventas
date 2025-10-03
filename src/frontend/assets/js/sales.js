let sales = JSON.parse(localStorage.getItem("sales")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

// Registrar venta
function createSale(sale) {
    const productIndex = products.findIndex(p => p.name === sale.product);
    if (productIndex !== -1 && products[productIndex].stock >= sale.quantity) {
        products[productIndex].stock -= sale.quantity;
        localStorage.setItem("products", JSON.stringify(products));
        sales.push(sale);
        localStorage.setItem("sales", JSON.stringify(sales));
        return { success: true, message: "Venta registrada correctamente." };
    } else {
        return { success: false, message: "Stock insuficiente." };
    }
}

// Obtener historial de ventas
function getSales() {
    return sales;
}

// Cargar productos en el select
function loadProductsToSelect() {
    const select = document.getElementById("productSelect");
    if (!select) return;
    select.innerHTML = "";
    products.forEach(p => {
        let option = document.createElement("option");
        option.value = p.name;
        option.textContent = `${p.name} (Stock: ${p.stock})`;
        select.appendChild(option);
    });
}

// Inicializar formulario
document.addEventListener("DOMContentLoaded", () => {
    loadProductsToSelect();
    const form = document.getElementById("saleForm");
    const errorMsg = document.getElementById("errorMsg");
    const successMsg = document.getElementById("successMsg");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            errorMsg.style.display = "none";
            successMsg.style.display = "none";
            const sale = {
                product: document.getElementById("productSelect").value,
                quantity: parseInt(document.getElementById("quantity").value),
                paymentMethod: document.getElementById("paymentMethod").value,
                date: new Date().toLocaleString(),
            };
            const result = createSale(sale);
            if (result.success) {
                successMsg.innerText = result.message;
                successMsg.style.display = "block";
                form.reset();
                loadProductsToSelect();
            } else {
                errorMsg.innerText = result.message;
                errorMsg.style.display = "block";
            }
        });
    }
});