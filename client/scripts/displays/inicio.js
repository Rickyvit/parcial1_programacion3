function displayInicio() {
    let d = document;

    borrarDisplay();

    objPosteos = [{

        id: 1,
        titulo: 'posteos',
        contenido: '',

    }, ];

    posteos = d.querySelector('#mostrar');
    objPosteos.forEach(el => {
        posteos.innerHTML += '<nav>  <a href="#"><h1>Forum</h1></a>  <ul> <li><a href="#">Usuario</a></li> <li><a href="#">Cerrar Sesion</a></li> </ul> </nav>  <div class="contenedorPostGrande"> <div class="contenedorPostUsuario"><figure><img src="imagenes/Ricky_Vitali.jpg" alt=""></figure><span>Ricky</span> </div><div class="contenedorPost"><span>Inserte Titulo</span> <p>Inserte texto de la publicacion.</p> <p class="fechaPublicacion">Publicado el 29/04/2021 a las 20:20</p></div></div>';
    });


    
}