<?php
class Venta {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Registrar una venta
    public function registrar($usuario_id, $producto_id, $cantidad, $total) {
        try {
            $this->pdo->beginTransaction();

            // Registrar venta
            $stmt = $this->pdo->prepare(
                "INSERT INTO ventas (usuario_id, producto_id, cantidad, total, fecha) VALUES (?, ?, ?, ?, NOW())"
            );
            $stmt->execute([$usuario_id, $producto_id, $cantidad, $total]);

            // Actualizar stock
            $stmt2 = $this->pdo->prepare(
                "UPDATE productos SET stock = stock - ? WHERE id = ?"
            );
            $stmt2->execute([$cantidad, $producto_id]);

            $this->pdo->commit();
            return true;
        } catch (Exception $e) {
            $this->pdo->rollBack();
            return false;
        }
    }

    // Obtener todas las ventas
    public function obtenerTodas() {
        $stmt = $this->pdo->query(
            "SELECT v.*, u.nombre AS usuario, p.nombre AS producto 
             FROM ventas v
             JOIN usuarios u ON v.usuario_id = u.id
             JOIN productos p ON v.producto_id = p.id"
        );
        return $stmt->fetchAll();
    }
}
