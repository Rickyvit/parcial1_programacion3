<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Red Social</title>
    <link rel="stylesheet" href="estilos/estilo.css">
</head>

<body>



    <nav>
        <a href="index.php">
            <h1>Forum</h1>
        </a>
        <ul>
            <li><a href="index.php">Inicio</a></li>
            <li><a href="index.php">Posteos</a></li>
            <li><a href="login.php">Iniciar Sesión</a></li>
        </ul>

    </nav>


    <main>

        <h2>Registro</h2>

        <form action="acciones/registro.php" method="POST">
            <p>Ingrese su nombre</p>
            <input type="text" name="nombre" placeholder="Nombre de Usuario">
            <p>Ingrese su mail</p>
            <input type="email" name="email" placeholder="Email">
            <p>Ingrese su Contraseña</p>
            <input type="password" name="password" placeholder="Contraseña">

            <input type="submit" value="Registrarse">

        </form>

    </main>


</body>

</html>