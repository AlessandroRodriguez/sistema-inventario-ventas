<<<<<<< HEAD
Manual de Usuario
Sistema de Inventario y Ventas

1. Introducción
El Sistema de Inventario y Ventas es una herramienta desarrollada para optimizar los procesos de administración de productos, gestión de inventario y control de ventas en empresas de distintos tamaños.
Su propósito principal es reducir errores manuales, mejorar la organización del negocio y facilitar la toma de decisiones a través de reportes y estadísticas claras.

El sistema está diseñado con una interfaz sencilla e intuitiva, pensada para que tanto administradores como vendedores puedan usarlo sin necesidad de conocimientos técnicos avanzados.
Gracias a su arquitectura escalable, puede ejecutarse de manera local (en un servidor propio) o en la nube, garantizando seguridad, disponibilidad y crecimiento a largo plazo.

2. Requisitos del Sistema
Para garantizar un funcionamiento óptimo del sistema, se recomienda cumplir con los siguientes requisitos:

Software:
Navegador web actualizado (Google Chrome, Mozilla Firefox o Microsoft Edge).
Servidor web (Apache o Nginx).
Base de datos MySQL o MariaDB.
PHP (versión recomendada >= 8.0).
Hardware mínimo (modo local):
Procesador dual core.
4 GB de memoria RAM.
10 GB de espacio libre en disco.
Requisitos de acceso (modo nube):
Conexión estable a internet.
Usuario y contraseña válidos (rol: Administrador o Vendedor).
Acceso a la URL oficial del sistema.
3. Inicio de Sesión
El acceso al sistema es seguro y requiere autenticación:

Abrir el navegador web y dirigirse a la dirección URL proporcionada por el administrador.
Ingresar usuario y contraseña en el formulario de inicio.
Presionar el botón Iniciar Sesión.
Si los datos son correctos, se cargará el Dashboard principal.
En caso de error, el sistema mostrará un mensaje indicando que las credenciales no son válidas.
⚠️ Recomendación: cambiar la contraseña la primera vez que se accede al sistema.

4. Dashboard
El Dashboard funciona como la pantalla principal y muestra un resumen de la operación en tiempo real:

Cantidad total de productos registrados.
Ventas realizadas durante el día o el mes.
Alertas de productos con stock bajo o agotado.
Gráficas con tendencias de ventas e inventario.
Accesos rápidos a los módulos principales: Productos, Inventario, Ventas, Reportes y Usuarios.
5. Gestión de Productos
La correcta gestión de productos es clave para mantener un inventario actualizado.

5.1 Agregar Producto
Ir al módulo Productos.
Presionar Agregar Producto.
Completar la información solicitada:
Nombre del producto.
Categoría.
Precio de venta.
Stock inicial.
Descripción (opcional).
Guardar los cambios.
✅ El producto quedará disponible para ventas y reportes.
5.2 Editar Producto
Seleccionar el producto a modificar desde la lista.
Hacer clic en Editar.
Actualizar los campos necesarios.
Guardar los cambios.
💡 Útil para corregir precios o actualizar descripciones.
5.3 Eliminar Producto
Seleccionar el producto que se desea borrar.
Hacer clic en Eliminar.
Confirmar la acción en el cuadro de diálogo.
⚠️ Una vez eliminado, no podrá recuperarse.
6. Control de Inventario
El módulo de inventario permite registrar entradas y salidas de stock en tiempo real.

6.1 Registrar Entrada de Stock
Se usa para aumentar la cantidad de productos (nuevas compras, reposiciones).
Ingresar al módulo Inventario.
Seleccionar Agregar Entrada.
Indicar producto, cantidad y fecha.
Confirmar en Registrar.
6.2 Registrar Salida de Stock
Se usa para ventas, devoluciones o ajustes.
Ingresar al módulo Inventario.
Seleccionar Agregar Salida.
Indicar producto, cantidad y motivo (venta, devolución, ajuste).
Confirmar en Registrar.
7. Registro de Ventas
El sistema permite realizar ventas de forma ágil y automática:

Acceder al módulo Ventas.
Presionar Nueva Venta.
Seleccionar productos, indicar cantidades y verificar precios.
Revisar el total de la transacción.
Confirmar en Finalizar Venta.
El stock de cada producto se ajustará automáticamente.
Se podrá generar un comprobante (PDF o impresión física).
8. Reportes
El sistema genera reportes que facilitan el análisis de la operación:

Inventario actual: lista de todos los productos y sus existencias.
Ventas por fecha: historial de transacciones en un rango específico.
Productos más vendidos: ranking de los artículos con mayor rotación.
Opciones de exportación:

PDF (para impresión o archivo digital).
Excel (para análisis detallado).
9. Gestión de Usuarios (Opcional)
Solo accesible para usuarios con rol Administrador.

9.1 Agregar Usuario
Ir al módulo Usuarios.
Seleccionar Agregar Usuario.
Completar nombre, correo y rol.
Guardar cambios.
9.2 Editar Usuario
Seleccionar un usuario existente.
Modificar la información necesaria.
Guardar cambios.
9.3 Eliminar Usuario
Seleccionar al usuario.
Presionar Eliminar.
Confirmar la acción.
10. Consejos y Buenas Prácticas
Mantener siempre actualizado el stock después de cada transacción.
Revisar los reportes semanalmente para detectar anomalías.
Cambiar contraseñas de forma periódica para mayor seguridad.
Realizar respaldos automáticos de la base de datos.
Asignar el rol correcto a cada usuario para evitar accesos indebidos.
11. Soporte Técnico
En caso de problemas con la aplicación, el usuario puede comunicarse con el equipo de soporte:

📧 Correo: alessandrorr1007@gmail.com
📞 Teléfono: (+51) 935 797 978
El tiempo de respuesta promedio es de 24 horas hábiles.
=======
# Manual de Usuario
Sistema de Inventario y Ventas

---

## 1. Introducción
El **Sistema de Inventario y Ventas** es una herramienta desarrollada para optimizar los procesos de administración de productos, gestión de inventario y control de ventas en empresas de distintos tamaños.  
Su propósito principal es **reducir errores manuales, mejorar la organización del negocio y facilitar la toma de decisiones** a través de reportes y estadísticas claras.

El sistema está diseñado con una interfaz sencilla e intuitiva, pensada para que tanto **administradores** como **vendedores** puedan usarlo sin necesidad de conocimientos técnicos avanzados.  
Gracias a su arquitectura escalable, puede ejecutarse de manera **local** (en un servidor propio) o en la **nube**, garantizando seguridad, disponibilidad y crecimiento a largo plazo.

---

## 2. Requisitos del Sistema
Para garantizar un funcionamiento óptimo del sistema, se recomienda cumplir con los siguientes requisitos:

- **Software**:
  - Navegador web actualizado (Google Chrome, Mozilla Firefox o Microsoft Edge).
  - Servidor web (Apache o Nginx).
  - Base de datos **MySQL** o **MariaDB**.
  - PHP (versión recomendada >= 8.0).
- **Hardware mínimo (modo local)**:
  - Procesador dual core.
  - 4 GB de memoria RAM.
  - 10 GB de espacio libre en disco.
- **Requisitos de acceso (modo nube)**:
  - Conexión estable a internet.
  - Usuario y contraseña válidos (rol: Administrador o Vendedor).
  - Acceso a la URL oficial del sistema.

---

## 3. Inicio de Sesión
El acceso al sistema es seguro y requiere autenticación:

1. Abrir el navegador web y dirigirse a la dirección URL proporcionada por el administrador.  
2. Ingresar **usuario y contraseña** en el formulario de inicio.  
3. Presionar el botón **Iniciar Sesión**.  
4. Si los datos son correctos, se cargará el **Dashboard principal**.  
5. En caso de error, el sistema mostrará un mensaje indicando que las credenciales no son válidas.  

⚠️ **Recomendación:** cambiar la contraseña la primera vez que se accede al sistema.

---

## 4. Dashboard
El **Dashboard** funciona como la pantalla principal y muestra un resumen de la operación en tiempo real:

- Cantidad total de productos registrados.  
- Ventas realizadas durante el día o el mes.  
- Alertas de productos con **stock bajo o agotado**.  
- Gráficas con tendencias de ventas e inventario.  
- Accesos rápidos a los módulos principales: **Productos, Inventario, Ventas, Reportes y Usuarios**.  

---

## 5. Gestión de Productos
La correcta gestión de productos es clave para mantener un inventario actualizado.

### 5.1 Agregar Producto
1. Ir al módulo **Productos**.  
2. Presionar **Agregar Producto**.  
3. Completar la información solicitada:  
   - Nombre del producto.  
   - Categoría.  
   - Precio de venta.  
   - Stock inicial.  
   - Descripción (opcional).  
4. Guardar los cambios.  
✅ El producto quedará disponible para ventas y reportes.  

### 5.2 Editar Producto
1. Seleccionar el producto a modificar desde la lista.  
2. Hacer clic en **Editar**.  
3. Actualizar los campos necesarios.  
4. Guardar los cambios.  
💡 Útil para corregir precios o actualizar descripciones.  

### 5.3 Eliminar Producto
1. Seleccionar el producto que se desea borrar.  
2. Hacer clic en **Eliminar**.  
3. Confirmar la acción en el cuadro de diálogo.  
⚠️ Una vez eliminado, no podrá recuperarse.  

---

## 6. Control de Inventario
El módulo de inventario permite registrar entradas y salidas de stock en tiempo real.

### 6.1 Registrar Entrada de Stock
- Se usa para aumentar la cantidad de productos (nuevas compras, reposiciones).  
1. Ingresar al módulo **Inventario**.  
2. Seleccionar **Agregar Entrada**.  
3. Indicar producto, cantidad y fecha.  
4. Confirmar en **Registrar**.  

### 6.2 Registrar Salida de Stock
- Se usa para ventas, devoluciones o ajustes.  
1. Ingresar al módulo **Inventario**.  
2. Seleccionar **Agregar Salida**.  
3. Indicar producto, cantidad y motivo (venta, devolución, ajuste).  
4. Confirmar en **Registrar**.  

---

## 7. Registro de Ventas
El sistema permite realizar ventas de forma ágil y automática:

1. Acceder al módulo **Ventas**.  
2. Presionar **Nueva Venta**.  
3. Seleccionar productos, indicar cantidades y verificar precios.  
4. Revisar el total de la transacción.  
5. Confirmar en **Finalizar Venta**.  
6. El stock de cada producto se ajustará automáticamente.  
7. Se podrá generar un comprobante (PDF o impresión física).  

---

## 8. Reportes
El sistema genera reportes que facilitan el análisis de la operación:

- **Inventario actual:** lista de todos los productos y sus existencias.  
- **Ventas por fecha:** historial de transacciones en un rango específico.  
- **Productos más vendidos:** ranking de los artículos con mayor rotación.  

Opciones de exportación:  
- **PDF** (para impresión o archivo digital).  
- **Excel** (para análisis detallado).  

---

## 9. Gestión de Usuarios (Opcional)
Solo accesible para usuarios con rol **Administrador**.

### 9.1 Agregar Usuario
1. Ir al módulo **Usuarios**.  
2. Seleccionar **Agregar Usuario**.  
3. Completar nombre, correo y rol.  
4. Guardar cambios.  

### 9.2 Editar Usuario
1. Seleccionar un usuario existente.  
2. Modificar la información necesaria.  
3. Guardar cambios.  

### 9.3 Eliminar Usuario
1. Seleccionar al usuario.  
2. Presionar **Eliminar**.  
3. Confirmar la acción.  

---

## 10. Consejos y Buenas Prácticas
- Mantener siempre actualizado el stock después de cada transacción.  
- Revisar los reportes semanalmente para detectar anomalías.  
- Cambiar contraseñas de forma periódica para mayor seguridad.  
- Realizar respaldos automáticos de la base de datos.  
- Asignar el rol correcto a cada usuario para evitar accesos indebidos.  

---

## 11. Soporte Técnico
En caso de problemas con la aplicación, el usuario puede comunicarse con el equipo de soporte:  

- 📧 Correo: **alessandrorr1007@gmail.com**  
- 📞 Teléfono: **(+51) 935 797 978**    

El tiempo de respuesta promedio es de **24 horas hábiles**.
>>>>>>> a6d74d14cee279f3f1beb67842949b5871b2ceb1
