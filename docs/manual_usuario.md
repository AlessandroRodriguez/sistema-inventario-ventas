# Manual de Usuario  
Sistema de Inventario y Ventas  

---

## 1. Introducción
El Sistema de Inventario y Ventas está diseñado para facilitar la gestión de productos, el control de stock y el registro de transacciones de manera eficiente.  
Permite a los usuarios administrar productos, realizar ventas, generar reportes y mantener un control ordenado del inventario.

---

## 2. Requisitos del Sistema
- Navegador web moderno (Chrome, Firefox, Edge).  
- Conexión a internet si la aplicación está desplegada en la nube.  
- Usuario y contraseña para iniciar sesión (roles: **Administrador**, **Vendedor**).  
- Acceso a la base de datos (MySQL o MariaDB) si se trabaja localmente.  

---

## 3. Inicio de Sesión
1. Abrir el navegador y acceder a la URL de la aplicación.  
2. Ingresar usuario y contraseña.  
3. Presionar el botón **Iniciar Sesión**.  
4. Si las credenciales son correctas, se mostrará el **Dashboard principal**.  

---

## 4. Dashboard
El Dashboard muestra un resumen de:  
- Productos en inventario.  
- Ventas recientes.  
- Alertas de stock bajo.  
- Acceso rápido a módulos principales: **Productos**, **Inventario**, **Ventas**, **Reportes**.  

---

## 5. Gestión de Productos

### 5.1 Agregar Producto
1. Ir al módulo **Productos**.  
2. Presionar el botón **Agregar Producto**.  
3. Completar los campos:  
   - Nombre  
   - Categoría  
   - Precio de venta  
   - Stock inicial  
   - Descripción (opcional)  
4. Presionar **Guardar**.  
5. El producto se añadirá al inventario y estará disponible para ventas.  

### 5.2 Editar Producto
1. En el listado de productos, seleccionar el producto a modificar.  
2. Presionar **Editar**.  
3. Actualizar los campos necesarios.  
4. Presionar **Guardar Cambios**.  

### 5.3 Eliminar Producto
1. Seleccionar el producto a eliminar.  
2. Presionar **Eliminar**.  
3. Confirmar la acción.  
4. El producto será removido del inventario.  

---

## 6. Control de Inventario

### 6.1 Registrar Entrada de Stock
1. Ir al módulo **Inventario**.  
2. Seleccionar **Agregar Entrada**.  
3. Indicar producto, cantidad y fecha.  
4. Presionar **Registrar**.  
5. El stock se actualizará automáticamente.  

### 6.2 Registrar Salida de Stock
1. Ir al módulo **Inventario**.  
2. Seleccionar **Agregar Salida**.  
3. Indicar producto, cantidad y motivo (venta, ajuste, etc.).  
4. Presionar **Registrar**.  
5. El stock se actualizará automáticamente.  

---

## 7. Registro de Ventas
1. Ir al módulo **Ventas**.  
2. Presionar **Nueva Venta**.  
3. Seleccionar productos y cantidades.  
4. Revisar el total de la venta.  
5. Presionar **Finalizar Venta**.  
6. El stock de los productos se ajustará automáticamente.  
7. Se generará un comprobante de venta (opcional: PDF o impresión).  

---

## 8. Reportes
1. Ir al módulo **Reportes**.  
2. Seleccionar el tipo de reporte:  
   - Inventario actual  
   - Ventas por fecha  
   - Productos más vendidos  
3. Configurar filtros (fecha, categoría, vendedor).  
4. Presionar **Generar Reporte**.  
5. Visualizar y/o exportar el reporte en **PDF o Excel**.  

---

## 9. Gestión de Usuarios

### 9.1 Agregar Usuario
1. Ir al módulo **Usuarios**.  
2. Presionar **Agregar Usuario**.  
3. Completar los datos:  
   - Nombre  
   - Correo electrónico  
   - Rol (Administrador / Vendedor)  
4. Presionar **Guardar**.  

### 9.2 Editar Usuario
1. Seleccionar usuario.  
2. Presionar **Editar**.  
3. Actualizar información y guardar cambios.  

### 9.3 Eliminar Usuario
1. Seleccionar usuario.  
2. Presionar **Eliminar**.  
3. Confirmar la acción.  

---

## 10. Consejos y Buenas Prácticas
- Mantener actualizado el stock después de cada venta.  
- Revisar los reportes regularmente para controlar pérdidas o faltantes.  
- No compartir credenciales de administrador con personal no autorizado.  
- Realizar respaldos periódicos de la base de datos.  

---

## 11. Soporte Técnico
En caso de problemas con la aplicación, contactar al equipo de soporte:  
- 📧 Correo: **alessandrorr1007@gmail.com**  
- 📞 Teléfono: **(+51) 935 797 978**    
