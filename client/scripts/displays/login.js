function displayLogin() {
    
    
    let h2,form,p,p2,inputUsuario,inputPassword,inputSubmit,register,d = document,displayErrors;

    borrarDisplay();



    h2 = d.createElement('h2');
    h2.innerHTML = 'Iniciar Sesion';

    form = d.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'POST');
    form.addEventListener('submit', Login);

    p = d.createElement('p');
    p.innerHTML = 'Ingrese su Nombre Usuario'

    inputUsuario = d.createElement('input');
    inputUsuario.setAttribute('type', 'text');
    inputUsuario.setAttribute('name', 'usuario');
    inputUsuario.setAttribute('placeholder', 'Nombre de Usuario');
    inputUsuario.setAttribute('required','');

    p2 = d.createElement('p');
    p2.innerHTML = 'Ingrese su Nombre Usuario'

    inputPassword = d.createElement('input');
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('name','password');
    inputPassword.setAttribute ('placeholder', 'Contraseña');
    inputPassword.setAttribute('required','');

    inputSubmit = d.createElement('input');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Iniciar sesión');

    register = d.createElement('a');
    register.setAttribute('href','#register')
    register.innerHTML = 'Crear cuenta';
    register.addEventListener('click',displayRegister);

    /* displayErrors = d.createElement('div');
    displayErrors.setAttribute('id','errorNotification'); */

    


    form.appendChild(h2);
    form.appendChild(p);
    form.appendChild(inputUsuario);
    form.appendChild(p2);
    form.appendChild(inputPassword);
    form.appendChild(inputSubmit);
    form.appendChild(register);
    /* form.insertBefore(displayErrors, d.querySelector("form p:first-of-type"));  */
    d.querySelector('#mostrar').appendChild(form);
}