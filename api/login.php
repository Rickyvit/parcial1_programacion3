<?php

require_once('class/autoload.php');

header('Content-Type: application/json');


if($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_POST['usuario']) || !empty($_POST['password'])) {
        try {
            $login = Usuario::logear($_POST["usuario"], $_POST["password"]);
            print(json_encode(['state' => $login]));
        }catch(Exception $e){
            echo json_encode(['state' => 'error',
            'message' => $e->getMessage()
            ]);
        }       
    }
}