import express from "express";
import cors from "cors";
import { productos } from "./data/productos.js";  // ✅ Importar productos

const app = express();
app.use(cors());
app.use(express.json());

const api = express.Router();

api.get("/test", (req, res) => {
  res.json({ message: "✅ API funcionando correctamente desde el backend" });
});

// ✅ Nueva ruta de productos
api.get("/productos", (req, res) => {
  res.json(productos);
});

app.use("/api", api);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error("❌ Error en el servidor:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}/api`);
});

