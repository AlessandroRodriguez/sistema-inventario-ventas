#  Sistema de Inventario y Ventas - Market Carmensita

Este proyecto es una aplicación web desarrollada para la gestión integral de inventario y ventas del **Market Carmensita**, permitiendo controlar productos, existencias, movimientos y transacciones de manera eficiente y centralizada.

---

##  Tecnologías Utilizadas

| Categoría | Tecnologías |
|------------|--------------|
| **Backend** | Node.js, Express.js |
| **Base de Datos** | MySQL |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Control de versiones** | Git y GitHub |
| **Entorno de ejecución** | Servidor local con `npm start` |

---

##  Descripción General

El sistema permite registrar, actualizar y consultar información sobre productos, existencias y ventas.  
Está diseñado para optimizar la administración de inventario y agilizar los procesos de venta en pequeños y medianos negocios.

**Principales objetivos:**
- Controlar el stock de productos en tiempo real.
- Registrar ventas con detalle de productos y montos.
- Generar reportes básicos de movimientos.
- Mantener una base de datos organizada y segura.

---

##  Funcionalidades Principales

✅ **Gestión de productos**
- Agregar, editar y eliminar productos.  
- Visualizar stock disponible.  
- Alerta automática cuando el stock es bajo.

✅ **Módulo de inventario**
- Control de entradas y salidas.  
- Actualización dinámica de cantidades.  

✅ **Módulo de ventas**
- Registro de ventas con detalle de productos.  
- Cálculo automático de totales y cambio.  

✅ **Reportes**
- Consultas de ventas por fecha.  
- Resumen de movimientos de inventario.

---

##  Instalación y Configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/AlessandroRodriguez/sistema-inventario-ventas.git

2️⃣ Instalar dependencias

cd sistema-inventario-ventas
npm install

3️⃣ Configurar la base de datos

Crea una base de datos MySQL (por ejemplo: db_inventario).

Importa el archivo SQL si existe en la carpeta del proyecto.

En el archivo de configuración (por ejemplo, config/db.js), ajusta tus credenciales:

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_inventario'
});

4️⃣ Iniciar el servidor

npm start


El sistema se ejecutará normalmente en:
- http://localhost:3000

💻 Uso del Sistema

Accede al sistema desde el navegador en http://localhost:3000.

Dirígete al módulo de Inventario para ver los productos disponibles.

Realiza una venta desde el módulo Ventas.

Consulta reportes o movimientos desde el panel principal.

🧠 Autores

Desarrollado por:
👨‍💻 Alessandro Rodríguez
👨‍💻 Brad Barrios
👨‍💻 Darli Medina
📚 Proyecto académico - Infraestructura de TI
🏫 Universidad Privada Antenor Orrego, Trujillo - Perú

📜 Licencia

Este proyecto está bajo la licencia MIT.

🌐 Enlace del Repositorio

🔗 https://github.com/AlessandroRodriguez/sistema-inventario-ventas
