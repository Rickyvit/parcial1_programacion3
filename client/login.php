<?php
require_once '../api/class/autoload.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Red Social - Ingresar</title>
    <link rel="stylesheet" href="estilos/estilo.css">
</head>
<body>
<main>
    <h2>Iniciar Sesión</h2>
    <form action="acciones/loginn.php" method="POST">
        <p>Ingrese su nombre de Usuario</p>
        <input type="text" name="nombre" placeholder="Nombre de Usuario">
        <p>Ingrese su Contraseña</p>
        <input type="password" name="password" placeholder="Contraseña">

        <input type="submit" value="Ingresar">
        <a href="secciones/register.php">Crear Cuenta</a>
    </form>
</main>

<footer>
    <p>Creador por Ricky</p>
</footer>

</body>
</html>
