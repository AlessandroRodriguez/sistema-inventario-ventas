// ====== BACKEND SERVER ======
import express from "express";
import cors from "cors";

const app = express();

// ==== Middlewares ====
app.use(cors());
app.use(express.json());

// ==== API Routes ====
const api = express.Router();

api.get("/test", (req, res) => {
  res.json({ message: "✅ API funcionando correctamente desde el backend" });
});

// Montamos todas las rutas de la API bajo /api
app.use("/api", api);

// ==== Rutas inexistentes ====
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// ==== Error general ====
app.use((err, req, res, next) => {
  console.error("❌ Error en el servidor:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

// ==== Iniciar Servidor ====
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}/api`);
});
