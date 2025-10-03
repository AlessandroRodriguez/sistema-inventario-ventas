let products = JSON.parse(localStorage.getItem("products")) || [];

// Obtener productos
function getProducts() {
    return products;
}

// Crear producto
function createProduct(product) {
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}

// Actualizar producto
function updateProduct(index, updatedProduct) {
    products[index] = updatedProduct;
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}

// Eliminar producto
function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}

// Renderizar tabla de productos
function renderProducts() {
    const tableBody = document.querySelector("#productTable tbody");
    if (!tableBody) return;
    tableBody.innerHTML = "";
    getProducts().forEach((p, index) => {
        let row = `
            <tr>
                <td>${p.name}</td>
                <td>${p.price}</td>
                <td>${p.stock}</td>
                <td>${p.category}</td>
                <td>
                    <button class="edit-btn" onclick="editProduct(${index})">Editar</button>
                    <button class="delete-btn" onclick="deleteProduct(${index})">Eliminar</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Editar producto
function editProduct(index) {
    const product = products[index];
    const newName = prompt("Nuevo nombre:", product.name);
    const newPrice = prompt("Nuevo precio:", product.price);
    const newStock = prompt("Nuevo stock:", product.stock);
    const newCategory = prompt("Nueva categoría:", product.category);
    updateProduct(index, {
        name: newName || product.name,
        price: parseFloat(newPrice) || product.price,
        stock: parseInt(newStock) || product.stock,
        category: newCategory || product.category,
    });
}

// Inicializar renderizado al cargar el DOM
document.addEventListener("DOMContentLoaded", renderProducts);