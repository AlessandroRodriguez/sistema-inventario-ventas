<?php
// routes/routes.php

require_once __DIR__ . '/../controllers/ProductoController.php';
require_once __DIR__ . '/../controllers/VentaController.php';
require_once __DIR__ . '/../controllers/UsuarioController.php';

header('Content-Type: application/json');

// Normalizar URI quitando parámetros de query (?id=1)
function getPath($uri) {
    $uri = parse_url($uri, PHP_URL_PATH);
    return rtrim($uri, '/'); // elimina la barra final si existe
}

function handleRequest($uri, $method) {
    $uri = getPath($uri);

    $productoController = new ProductoController();
    $ventaController = new VentaController();
    $usuarioController = new UsuarioController();

    // --- Productos ---
    if ($uri === '/productos' && $method === 'GET') {
        $productoController->listarProductos();
    } elseif ($uri === '/productos' && $method === 'POST') {
        $data = $_POST ?: json_decode(file_get_contents('php://input'), true);
        $productoController->crearProducto($data);
    } elseif (preg_match('#^/productos/(\d+)$#', $uri, $matches) && $method === 'GET') {
        $productoController->verProducto($matches[1]);
    }

    // --- Ventas ---
    elseif ($uri === '/ventas' && $method === 'POST') {
        $data = $_POST ?: json_decode(file_get_contents('php://input'), true);
        $ventaController->registrarVenta($data);
    }

    // --- Usuarios ---
    elseif ($uri === '/usuarios' && $method === 'POST') {
        $data = $_POST ?: json_decode(file_get_contents('php://input'), true);
        $usuarioController->crearUsuario($data);
    }

    // --- Ruta no encontrada ---
    else {
        http_response_code(404);
        echo json_encode(["error" => "Ruta no encontrada"]);
    }
}