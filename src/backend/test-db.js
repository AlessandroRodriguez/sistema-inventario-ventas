// src/backend/test-db.js
import pool from './config/db.js'; // <-- aquí apunta a la carpeta config


const testConnection = async () => {
  try {
    // Ejecuta una consulta simple
    const [rows] = await pool.query('SELECT 1 + 1 AS resultado');
    console.log('✅ Conexión exitosa a la base de datos:', rows);
  } catch (err) {
    console.error('❌ Error de conexión:', err.message);
  } finally {
    // Cierra el pool al terminar
    await pool.end();
  }
};

testConnection();
