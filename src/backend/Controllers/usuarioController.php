<?php
require_once __DIR__ . '/../models/Usuario.php';

class UsuarioController {
    private $usuarioModel;

    public function __construct($pdo) {
        $this->usuarioModel = new Usuario($pdo);
    }

    // Registrar usuario
    public function store($data) {
        $nombre = $data['nombre'];
        $email = $data['email'];
        $password = password_hash($data['password'], PASSWORD_DEFAULT); // Encriptar contraseña
        $rol = $data['rol']; // admin, vendedor

        $resultado = $this->usuarioModel->agregar($nombre, $email, $password, $rol);
        echo json_encode(['success' => $resultado]);
    }

    // Listar usuarios
    public function index() {
        $usuarios = $this->usuarioModel->obtenerTodos();
        echo json_encode($usuarios);
    }

    // Autenticación (login)
    public function login($data) {
        $email = $data['email'];
        $password = $data['password'];

        $usuario = $this->usuarioModel->obtenerPorEmail($email);
        if ($usuario && password_verify($password, $usuario['password'])) {
            // Generar JWT u otro token si deseas autenticación
            echo json_encode(['success' => true, 'usuario' => $usuario]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Credenciales incorrectas']);
        }
    }
}
