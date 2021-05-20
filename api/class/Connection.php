<?php

class Connection {
    private static $db;

    const SERVIDOR = 'localhost';
    const USUARIO = 'root';
    const PASSWORD = '';
    const BASE = 'forum';


    public static function obtener() {
        if (self::$db === null) {
            self::abrir();
        }
        return self::$db;
    }

    private static function abrir() {
        $dsn = "mysql:host=" . self::SERVIDOR . ";dbname=" . self::BASE . ";charset=utf8mb4";
        try {
            self::$db = new PDO($dsn, self::USUARIO, self::PASSWORD);
        } catch (Exception $e) {
            echo "Error al abrir la conexión con la base de datos.";
        }
    }
}