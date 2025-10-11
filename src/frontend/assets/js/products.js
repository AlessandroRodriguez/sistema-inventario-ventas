export async function mostrarProductos() {
  const content = document.getElementById("content");
  content.innerHTML = "<h3>Cargando productos...</h3>";

  try {
    const response = await fetch("http://localhost:8000/api/productos");
    const productos = await response.json();

    content.innerHTML = `
      <h3>📦 Lista de Productos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio (S/)</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          ${productos.map(p => `
            <tr>
              <td>${p.nombre}</td>
              <td>${p.categoria}</td>
              <td>${p.precio.toFixed(2)}</td>
              <td>${p.stock}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  } catch (error) {
    content.innerHTML = "<p style='color:red;'>Error al cargar productos.</p>";
    console.error(error);
  }
}

