<?php
class Producto {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Obtener todos los productos
    public function obtenerTodos() {
        $stmt = $this->pdo->query("SELECT * FROM productos");
        return $stmt->fetchAll();
    }

    // Obtener un producto por ID
    public function obtenerPorId($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM productos WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }

    // Agregar un producto
    public function agregar($nombre, $precio, $stock) {
        $stmt = $this->pdo->prepare(
            "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)"
        );
        return $stmt->execute([$nombre, $precio, $stock]);
    }

    // Actualizar un producto
    public function actualizar($id, $nombre, $precio, $stock) {
        $stmt = $this->pdo->prepare(
            "UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?"
        );
        return $stmt->execute([$nombre, $precio, $stock, $id]);
    }

    // Eliminar un producto
    public function eliminar($id) {
        $stmt = $this->pdo->prepare("DELETE FROM productos WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
