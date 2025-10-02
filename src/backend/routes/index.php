
<?php

header("Content-Type: application/json");

// Obtener la ruta desde la URL
$request = $_SERVER['REQUEST_URI'];

// Quitar parámetros GET
$request = strtok($request, '?');

// Enrutamiento básico
switch ($request) {
    case '/api/productos':
        require __DIR__ . '/productos.php';
        break;
    case '/api/inventario':
        require __DIR__ . '/inventario.php';
        break;
    case '/api/ventas':
        require __DIR__ . '/ventas.php';
        break;
    case '/api/usuarios':
        require __DIR__ . '/usuarios.php';
        break;
    default:
        http_response_code(404);
        echo json_encode(["error" => "Ruta no encontrada"]);
        break;
}
