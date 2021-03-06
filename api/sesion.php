<?php


require_once('class/autoload.php');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {


    try {

        $usuario = new Usuario();
        $usuario->setUsuario($_POST["usuario"]);
        $usuario->setCorreo($_POST["correo"]);
        $usuario->setClave(password_hash($_POST["clave"], PASSWORD_DEFAULT));

        $usuario->registrar();

    } catch (Exception $e) {

        echo json_encode(array(
            'resultado' => false,
            'message' => $e->getMessage()
        ));

        die();
    }

    /*Pasaste papu*/


    echo json_encode(array(
        'resultado' => true,
        'message' => 'Te registraste exitosamente'
    ));

}
