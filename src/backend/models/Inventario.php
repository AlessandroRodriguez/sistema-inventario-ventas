<?php
class Inventario {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Obtener stock de un producto
    public function obtenerStock($producto_id) {
        $stmt = $this->pdo->prepare("SELECT stock FROM productos WHERE id = ?");
        $stmt->execute([$producto_id]);
        $result = $stmt->fetch();
        return $result ? $result['stock'] : null;
    }

    // Actualizar stock (por venta o ingreso)
    public function actualizarStock($producto_id, $cantidad) {
        $stmt = $this->pdo->prepare(
            "UPDATE productos SET stock = stock + ? WHERE id = ?"
        );
        return $stmt->execute([$cantidad, $producto_id]);
    }
}
