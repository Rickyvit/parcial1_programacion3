DROP DATABASE IF EXISTS forum;
CREATE DATABASE IF NOT EXISTS forum;
USE forum;

/*----------------------------*/

CREATE TABLE usuarios(
    id INT UNSIGNED UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    usuario VARCHAR(50) UNIQUE NOT NULL,
    correo VARCHAR(255) UNIQUE NOT NULL,
    clave VARCHAR(255) NOT NULL
)ENGINE=InnoDB;


/*----------------------------*/

CREATE TABLE posts (

    id INT UNSIGNED UNIQUE AUTO_INCREMENT NOT NULL,
    titulo VARCHAR(30) NOT NULL,
    contenido VARCHAR(200) NOT NULL,
	fecha DATETIME NOT NULL, 
	usuarios_id INT UNSIGNED NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (usuarios_id) REFERENCES usuarios(id) ON DELETE CASCADE



)ENGINE=InnoDB;

CREATE TABLE likes (

    id INT UNSIGNED UNIQUE AUTO_INCREMENT NOT NULL,
    usuarios_id INT UNSIGNED NOT NULL,
    posts_id INT UNSIGNED NOT NULL,
    PRIMARY KEY(id),
	FOREIGN KEY (usuarios_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (posts_id) REFERENCES posts(id) ON DELETE CASCADE
)


