function Login(e) {
    e.preventDefault();
    d = document
    

    let usuario = d.querySelector('input[type="text"]').value;
    let password = d.querySelector('input[type="password"]').value;

     var errores = [];  

        if (usuario.length == 0) {
            errores.push("El usuario no puede estar vacio");
      } 


      if (password.length == 0) {
        errores.push("Por favor, inserte una contraseña");
      }

  



    let datos = new FormData();
    datos.append('usuario', usuario);
    datos.append('password', password);

    fetch('../api/login.php', {
        method: 'POST',
        body: datos
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
      if (res.state === true) {
          console.log('Login succesfull');
          return displayInicio();
      }else{
        errores.push("Usuario o contraseña incorrecta");
        return Errors(errores);
      console.log("!Bien");
      }
    })
    .catch(err => {console.log(err.message)});


    
    if (errores.length !== 0) {
      return Errors(errores);  
  }


}
    
