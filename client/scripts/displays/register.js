function displayRegister() {
    
    let h2,form,p1,p2,p3,inputNombre,inputMail,inputContra,inputRegistrar,tengoCuenta,d = document;

  borrarDisplay();

    h2 = d.createElement('h2');
    h2.innerHTML = 'Registro';
    
    form = d.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'POST');
    form.addEventListener('submit', Register);

    p1 = d.createElement('p');
    p1.innerHTML = 'Ingrese su Nombre de Usuario'

    inputNombre = d.createElement('input');
    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('name', 'usuario');
    inputNombre.setAttribute('placeholder', 'Nombre de Usuario');

    p2 = d.createElement('p');
    p2.innerHTML = 'Ingrese su Mail'

    inputMail = d.createElement('input');
    inputMail.setAttribute('type', 'email');
    inputMail.setAttribute('name', 'correo');
    inputMail.setAttribute('placeholder', 'Correo Electronico');
    
    p3 = d.createElement('p');
    p3.innerHTML = 'Ingrese su contraseña'

    inputContra = d.createElement('input');
    inputContra.setAttribute('type', 'password');
    inputContra.setAttribute('name', 'clave');
    inputContra.setAttribute('placeholder', 'Contraseña');

    inputRegistrar = d.createElement('input');
    inputRegistrar.setAttribute('type', 'submit');
    inputRegistrar.setAttribute('value', 'Registrarse');

    tengoCuenta = d.createElement('a');
    tengoCuenta.setAttribute('href','#login');
    tengoCuenta.innerHTML='Ya estoy registrado';
    tengoCuenta.addEventListener('click',displayLogin);

    /* displayErrors = d.createElement('div');
    displayErrors.setAttribute('id','errorNotification'); */


    form.appendChild(h2);
    form.appendChild(p1);
    form.appendChild(inputNombre);
    form.appendChild(p2);
    form.appendChild(inputMail);
    form.appendChild(p3);
    form.appendChild(inputContra);
    form.appendChild(inputRegistrar);
    form.appendChild(tengoCuenta);
    
    /* form.insertBefore(displayErrors, d.querySelector("form p:first-of-type"));  */
    d.querySelector('#mostrar').appendChild(form);
    


}