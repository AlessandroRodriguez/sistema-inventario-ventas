<?php
require_once __DIR__ . '/../models/Venta.php';
require_once __DIR__ . '/../models/Producto.php';

class VentaController {
    private $ventaModel;
    private $productoModel;

    public function __construct($pdo) {
        $this->ventaModel = new Venta($pdo);
        $this->productoModel = new Producto($pdo);
    }

    // Registrar una venta
    public function store($data) {
        $producto_id = $data['producto_id'];
        $cantidad = $data['cantidad'];

        // Verificar stock
        $producto = $this->productoModel->obtenerPorId($producto_id);
        if ($producto['stock'] < $cantidad) {
            echo json_encode(['success' => false, 'message' => 'Stock insuficiente']);
            return;
        }

        // Registrar venta
        $resultado = $this->ventaModel->agregar($producto_id, $cantidad);

        // Actualizar stock
        $this->productoModel->actualizar($producto_id, $producto['nombre'], $producto['precio'], $producto['stock'] - $cantidad);

        echo json_encode(['success' => $resultado]);
    }

    // Listar ventas
    public function index() {
        $ventas = $this->ventaModel->obtenerTodos();
        echo json_encode($ventas);
    }
}
