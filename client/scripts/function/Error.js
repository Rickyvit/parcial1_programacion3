function Errors(errores) {
    
    let displayErrors,form;
   d = document;

    displayErrors = d.createElement('div');
    displayErrors.setAttribute('id','errorNotification');
    d.querySelector('form').insertBefore(displayErrors, d.querySelector("form last-of-type"));
    d.getElementById('errorNotification').innerHTML = '<ul>';
    errores.forEach(error => {
        d.getElementById('errorNotification').innerHTML += '<li>'+error+'</li>';
    });
    d.getElementById('errorNotification').innerHTML += '</ul>';

  
        
}


