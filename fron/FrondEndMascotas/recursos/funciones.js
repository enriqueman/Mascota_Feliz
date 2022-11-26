// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            RegistrarUsuario();
            event.preventDefault();
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function RegistrarPersona(){
    alert("Exito! todo esta bien!");
  }

  function RegistrarUsuario(){
    
    let nombre= document.querySelector("#txtnombre").value;
    let apellido= document.querySelector("#txtapellido").value;
    let telefono= document.querySelector("#txttelefono").value;
    let cedula= document.querySelector("#txtcedula").value;
    let email= document.querySelector("#txtemail").value;
    let rol= document.querySelector("#txtrol").value;
   
    let url='http://localhost:3000/usuarios';
    let datos= {
        cedula: cedula,
        nombre: nombre,
        apellido:apellido,
        telefono: telefono,
        correo: email,
        rol: rol
    };

    

    fetch(url,{
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'content-type':'application/json'
        }
    }).then(res=>res.json())
    .then(mensaje=>{
        console.log(mensaje)
    })

  }