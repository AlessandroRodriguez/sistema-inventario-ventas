<?php
class Usuario {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Registrar usuario
    public function registrar($nombre, $email, $password, $rol) {
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $stmt = $this->pdo->prepare(
            "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)"
        );
        return $stmt->execute([$nombre, $email, $hashedPassword, $rol]);
    }

    // Autenticar usuario
    public function autenticar($email, $password) {
        $stmt = $this->pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password'])) {
            return $user; // Devuelve datos del usuario
        }
        return false;
    }

    // Obtener todos los usuarios
    public function obtenerTodos() {
        $stmt = $this->pdo->query("SELECT id, nombre, email, rol FROM usuarios");
        return $stmt->fetchAll();
    }
}
