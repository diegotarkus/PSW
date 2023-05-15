$(function(){
    $("#formulario").validate({
        rules:{
            nombres:{
                required: true,
                minlength: 3
            },

            papellido:{
                required: true,
                minlength: 3
            },

            sapellido:{
                required: true,
                minlength: 3
            },

            rut:{
                required: true,
                minlength: 9,
                maxlength: 10
            },

            direccion:{
                required: true,
                minlength: 10
            },

            comuna:{
                required: true,
            },

            correo:{
                required: true,
                email: true
            },

            telefono:{
                required: true,
                digits: true,
                maxlength: 9
            },

            password:{
                required: true,
                rangelength: [6, 12]
            },

            mensaje:{
                required: true,
                minlength: 1,
                maxlength: 100
            }
        },

        messages:{
            nombres:{
                required: "Debe ingresar al menos un nombre.",
                minlength: "Debe ingresar al menos 3 carácteres."
            },

            papellido:{
                required: "Debe ingresar su apellido.",
                minlength: "Debe ingresar al menos 3 carácteres."
            },

            sapellido:{
                minlength: "Debe ingresar al menos 3 carácteres."
            },

            rut:{
                required: "Debe ingresar un RUT.",
            },

            direccion:{
                required: "Debe ingresar una dirección.",
                minlength: "Debe ingresar al menos 10 carácteres."
            },

            comuna:{
                required: "Debe seleccionar una comuna.",
            },

            correo:{
                required: "Debe ingresar un correo electrónico.",
                email: "Debe ingresar un correo válido."
            },

            telefono:{
                required: "Debe ingresar un número telefónico.",
                digits: "Debe ingresar solo números.",
                maxlength: "Excede el límite de números permitidos."
            },

            password:{
                required: "Por favor, ingrese una contraseña.",
                rangelength: "Su contraseña debe tener entre 6 y 12 caracteres."
            },

            mensaje:{
                required: "Debe ingresar un comentario.",
                maxlength: "Excede el límite de carácteres permitidos."
            }
        }

    
    })
})

$(function(){

})

function contadorChar(){
    let max = 100;
    let char = mensaje.value.length;
    let contador = (max - char);

    if(contador < 1){
        document.getElementById("numChar").innerHTML = "<span style='color : red';><i>Máximo permitido de carácteres.</i>"
    }else{
        document.getElementById("numChar").innerHTML = "Quedan " + contador + " carácteres restantes.";
    }
}

/* function crearStorage(){
    let datos = [
        {
            nombres: document.getElementById("nombres").value,
            primer_apellido: document.getElementById("papellido").value,
            segundo_apellido: document.getElementById("sapellido").value,
            rut: document.getElementById("rut").value,
            direccion: document.getElementById("direccion").value,
            comuna: document.getElementById("comuna").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value,
            contraseña: document.getElementById("password").value,
            mensaje: document.getElementById("mensaje").value
        },
    ];

    const almacen = JSON.stringify(datos);
    localStorage.setItem("datos001", almacen);
    console.log("Storage agregado.");
}*/

$(document).ready(function () {
    $("#registro").click(function () {
        let datos =
        {
            nombres: $("#nombres").value,
            primer_apellido: $("#papellido").value,
            segundo_apellido: $("#sapellido").value,
            rut: $("#rut").value,
            direccion: $("#direccion").value,
            comuna: $("#comuna").value,
            correo: $("#correo").value,
            telefono: $("#telefono").value,
            contraseña: $("#password").value,
            mensaje: $("#mensaje").value
        };

        if (nombres.value.length >= 3) {
            Swal.fire({
                icon: 'success',
                title: '¡Ha sido registrado!',
                text: "Bienvenido, " + nombres.value,
                confirmButtonText: 'OK',
            })

            const registro = JSON.stringify(datos);
            localStorage.setItem("datos001", registro);
            console.log("Storage agregado.");
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "Hay datos faltantes o no válidos.",
                confirmButtonText: 'OK',
            });
        };
    })
})


