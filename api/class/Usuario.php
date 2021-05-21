<?php

class Usuario
{
    private $usuario;
    private $correo;
    private $clave;

    /**
     * @throws Exception
     */
    public function registrar()
    {
        $db = Connection::obtener(); // Siempre lo primero que se ejecuta

        $query = "INSERT INTO usuarios (usuario, correo, clave) VALUES (:usuario, :correo, :clave)";

        $stmt = $db->prepare($query);

        $stmt->bindParam(':usuario', $this->usuario, PDO::PARAM_STR);
        $stmt->bindParam(':correo', $this->correo, PDO::PARAM_STR);
        $stmt->bindParam(':clave', $this->clave, PDO::PARAM_STR);

        if (!$stmt->execute()) {
            throw new Exception('No pudiste registrarte papu');
        }

    }


    public static function logear($usuario, $password)
    {
        $query = "SELECT * FROM usuarios WHERE usuario = ?";
        $db = Connection::obtener();
        $stmt = $db->prepare($query);
        $stmt->execute([$usuario]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($stmt->rowCount() > 0 && password_verify($password, $result['clave'])) {
            /* Logea */
            return true;
        } else {

            return false;
        }
    }


    public function setUsuario($usuario)
    {
        $this->usuario = $usuario;
    }

    public function setCorreo($correo)
    {
        $this->correo = $correo;
    }

    public function setClave($clave)
    {
        $this->clave = $clave;
    }


    public function getUsuario()
    {
        return $this->usuario;
    }

    public function getCorreo()
    {
        return $this->correo;
    }

    public function getClave()
    {
        return $this->clave;
    }


}
