function displayLogin() {

    document.createElement('form').addEventListener('submit', e => {

        e.preventDefault();
        fetch('url', {

            method: 'POST',
            body: 'Cuerpo de la peticion',
        }).then(res => {
            console.log(res);
        })


    });


    objPosteos = [{

        id: 1,
        nombre: 'posteos',

    }, ];

    posteos = querySelector('main div.productos');
    objPosteos.forEach(el => {
        productos.innerHTML += ' <div class="contenedorPostGrande"> <div class="contenedorPostUsuario"><figure><img src="imagenes/Ricky_Vitali.jpg" alt=""></figure><span>Ricky</span> </div><div class="contenedorPost"><span>Inserte Titulo</span> <p>Inserte texto de la publicacion.</p> <p class="fechaPublicacion">Publicado el 29/04/2021 a las 20:20</p></div></div>';
    });


}