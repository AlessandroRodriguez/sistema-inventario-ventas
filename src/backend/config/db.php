<?php
$host = 'localhost';
$user = 'tu_usuario';
$password = 'tu_contraseña';
$dbname = 'nombre_base_de_datos';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode([
        "error" => "Error de conexión a la base de datos: " . $conn->connect_error
    ]));
}

