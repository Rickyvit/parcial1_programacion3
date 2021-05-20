function borrarDisplay() {
    if (document.querySelector('#mostrar')) {
        document.querySelector('body').removeChild(document.querySelector('#mostrar'));

        var div = document.createElement('div');
        div.setAttribute('id','mostrar');
        document.querySelector('body').insertBefore(div,document.querySelector('footer'));

    } else {
       var div = document.createElement('div');
       div.setAttribute('id','mostrar');
       document.querySelector('body').insertBefore(div,document.querySelector('footer'));
    }
}