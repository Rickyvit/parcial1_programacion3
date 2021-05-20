function Register(e){
    d = document
    e.preventDefault();

    let usuario = d.querySelector('input[type="text"]').value;
    let email = d.querySelector('input[type="email"]').value;
    let password = d.querySelector('input[type="password"]').value;

    var errores = [];

    if (usuario.length == 0) {
         errores.push("El usuario no puede estar vacio");
    } else if(usuario.length > 25){
        errores.push("El usuario es demasiado largo");
    }




    if (email.length == 0) {
        errores.push("El mail no puede estar vacio");
    } else if(email.length >150){
        errores.push("Su mail es demasiado largo");
    }





    if (password.length == 0) {
        errores.push("Por favor, inserte una contraseña");
    }else if(password.length < 6){
        errores.push("Su contraseña es demasiado corta");
    }else if (password.length > 50) {
        errores.push("Su contraseña es demasiado larga");
    }
  

    if (errores.length !== 0) {
        return Errors(errores);  
    }



    
    let datos = new FormData();
    datos.append('usuario', usuario);
    datos.append('correo', email);
    datos.append('clave', password);

    fetch('../api/sesion.php',{
        method: 'POST',
        body : datos
    })
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        console.log(data);
        return displayLogin();
      }else{
      console.log("Algo salio mal")
      }
    })
    .catch(err => {console.log(err)});

}