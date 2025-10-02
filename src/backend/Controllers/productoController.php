<?php
require_once __DIR__ . '/../models/Producto.php';

class ProductoController {
    private $productoModel;

    public function __construct($pdo) {
        $this->productoModel = new Producto($pdo);
    }

    // Listar todos los productos
    public function index() {
        $productos = $this->productoModel->obtenerTodos();
        echo json_encode($productos);
    }

    // Mostrar un producto por ID
    public function show($id) {
        $producto = $this->productoModel->obtenerPorId($id);
        echo json_encode($producto);
    }

    // Crear un nuevo producto
    public function store($data) {
        $nombre = $data['nombre'];
        $precio = $data['precio'];
        $stock = $data['stock'];

        $resultado = $this->productoModel->agregar($nombre, $precio, $stock);
        echo json_encode(['success' => $resultado]);
    }

    // Actualizar un producto
    public function update($id, $data) {
        $nombre = $data['nombre'];
        $precio = $data['precio'];
        $stock = $data['stock'];

        $resultado = $this->productoModel->actualizar($id, $nombre, $precio, $stock);
        echo json_encode(['success' => $resultado]);
    }

    // Eliminar un producto
    public function delete($id) {
        $resultado = $this->productoModel->eliminar($id);
        echo json_encode(['success' => $resultado]);
    }
}