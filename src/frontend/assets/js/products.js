import { fetchAPI, API_URL } from "./api.js";

let products = JSON.parse(localStorage.getItem("products")) || [];
let useAPI = false; // 🔹 Cambia automáticamente según conexión

// Detectar conexión con backend
(async () => {
  try {
    const res = await fetch(`${API_URL}/test`);
    if (res.ok) {
      useAPI = true;
      console.log("✅ Backend detectado: modo API activado");
      products = await fetchAPI("products"); // si tienes endpoint
    }
  } catch {
    console.warn("⚠️ No se detectó backend, usando localStorage");
  }
  renderProducts();
})();

// Obtener productos
export async function getProducts() {
  if (useAPI) return await fetchAPI("products");
  return products;
}

// Crear producto
export async function createProduct(product) {
  if (useAPI) {
    await fetchAPI("products", "POST", product);
  } else {
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  }
  renderProducts();
}

// Actualizar producto
export async function updateProduct(index, updatedProduct) {
  if (useAPI) {
    await fetchAPI(`products/${updatedProduct.id}`, "PUT", updatedProduct);
  } else {
    products[index] = updatedProduct;
    localStorage.setItem("products", JSON.stringify(products));
  }
  renderProducts();
}

// Eliminar producto
export async function deleteProduct(index) {
  if (useAPI) {
    await fetchAPI(`products/${products[index].id}`, "DELETE");
  } else {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
  }
  renderProducts();
}

// Renderizar tabla de productos
export async function renderProducts() {
  const tableBody = document.querySelector("#productTable tbody");
  if (!tableBody) return;

  const data = await getProducts();
  tableBody.innerHTML = "";
  (data || []).forEach((p, index) => {
    const row = `
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
window.editProduct = async function (index) {
  const product = products[index];
  const newName = prompt("Nuevo nombre:", product.name);
  const newPrice = prompt("Nuevo precio:", product.price);
  const newStock = prompt("Nuevo stock:", product.stock);
  const newCategory = prompt("Nueva categoría:", product.category);

  await updateProduct(index, {
    ...product,
    name: newName || product.name,
    price: parseFloat(newPrice) || product.price,
    stock: parseInt(newStock) || product.stock,
    category: newCategory || product.category,
  });
};

// Inicializar renderizado al cargar el DOM
document.addEventListener("DOMContentLoaded", renderProducts);
