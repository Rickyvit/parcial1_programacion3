function displayInicio() {
    let d = document;

    borrarDisplay();

    let objPosteos = [{

        id: 1,
        titulo: 'posteos',
        contenido: '',

    },];

    let posteos = d.querySelector('#mostrar');
    objPosteos.forEach(() => {
        posteos.innerHTML += `
            `

    });


}
