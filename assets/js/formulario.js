document.getElementById("valNombres").style.display = "none";
document.getElementById("valPApellido").style.display = "none";
document.getElementById("valRut").style.display = "none";
document.getElementById("valDireccion").style.display = "none";
document.getElementById("valPassword").style.display = "none";
document.getElementById("valComuna").style.display = "none";
document.getElementById("valCorreo").style.display = "none";
document.getElementById("valTelefono").style.display = "none";
document.getElementById("valMensaje").style.display = "none";
document.getElementById("ocultar").style.display = "none";

function validacionFormulario(){
    let nombres = document.getElementById("txtNombres").value;
    let papellido = document.getElementById("txtPApellido").value;
    let sapellido = document.getElementById("txtSApellido").value;
    let rut = document.getElementById("txtRut").value;
    let direccion = document.getElementById("txtDireccion").value;
    let password = document.getElementById("txtPassword").value;
    let comuna = document.getElementById("cmbComuna").value;
    let telefono = document.getElementById("txtTelefono").value;
    let correo = document.getElementById("txtCorreo").value;
    let mensaje = document.getElementById("txtMensaje").value;

    if (nombres.length == 0){
        document.getElementById("valNombres").style.display = "inLine-flex";
        document.getElementById("txtNombres").classList.add("is-invalid");
    }else{
        document.getElementById("valNombres").style.display = "none";
        document.getElementById("txtNombres").classList.remove("is-invalid");
        document.getElementById("txtNombres").classList.add("is-valid");
    }

    if (papellido.length == 0){
        document.getElementById("valPApellido").style.display = "inLine";
        document.getElementById("txtPApellido").classList.add("is-invalid");
    }else{
        document.getElementById("valPApellido").style.display ="none";
        document.getElementById("txtPApellido").classList.remove("is-invalid");
        document.getElementById("txtPApellido").classList.add("is-valid");
    }

    if (sapellido.length == 0){
        document.getElementById("txtSApellido").classList.add("is-invalid");
    }else{
        document.getElementById("txtSApellido").classList.remove("is-invalid");
        document.getElementById("txtSApellido").classList.add("is-valid");
    }

    if (rut.length == 0){
        document.getElementById("valRut").style.display = "inLine";
        document.getElementById("txtRut").classList.add("is-invalid");
    }else{
        document.getElementById("valRut").style.display ="none";
        document.getElementById("txtRut").classList.remove("is-invalid");
        document.getElementById("txtRut").classList.add("is-valid");
    }

    if (direccion.length == 0){
        document.getElementById("valDireccion").style.display = "inLine";
        document.getElementById("txtDireccion").classList.add("is-invalid");
    }else{
        document.getElementById("valDireccion").style.display ="none";
        document.getElementById("txtDireccion").classList.remove("is-invalid");
        document.getElementById("txtDireccion").classList.add("is-valid");
    }

    if (comuna == "null"){
        document.getElementById("valComuna").style.display = "inLine";
        document.getElementById("cmbComuna").classList.add("is-invalid");
    }else{
        document.getElementById("valComuna").style.display = "none";
        document.getElementById("cmbComuna").classList.remove("is-invalid");
        document.getElementById("cmbComuna").classList.add("is-valid");
    }

    if (telefono.length == 9){
        document.getElementById("valTelefono").style.display ="none";
        document.getElementById("txtTelefono").classList.remove("is-invalid");
        document.getElementById("txtTelefono").classList.add("is-valid");
    }else{
        document.getElementById("valTelefono").style.display = "inLine";
        document.getElementById("txtTelefono").classList.add("is-invalid");
    }

    if (correo.length == 0){
        document.getElementById("valCorreo").style.display = "inLine";
        document.getElementById("txtCorreo").classList.add("is-invalid");
    }else{
        document.getElementById("valCorreo").style.display ="none";
        document.getElementById("txtCorreo").classList.remove("is-invalid");
        document.getElementById("txtCorreo").classList.add("is-valid");
    }   

    if (password.length == 0) {
        document.getElementById("valPassword").style.display = "inline";
        document.getElementById("txtPassword").classList.add("is-invalid");
      }else{
        document.getElementById("valPassword").style.display = "none";
        document.getElementById("txtPassword").classList.remove("is-invalid");
        document.getElementById("txtPassword").classList.add("is-valid");
      }  

    if (mensaje.length == 0){
        document.getElementById("valMensaje").style.display = "inLine";
        document.getElementById("txtMensaje").classList.add("is-invalid");
    }else{
        document.getElementById("valMensaje").style.display ="none";
        document.getElementById("txtMensaje").classList.remove("is-invalid");
        document.getElementById("txtMensaje").classList.add("is-valid");
    }

}

function password(){
    let input = document.getElementById("txtContrasena");
  
    if (input.type == 'password') {
      input.type = 'text';
      document.getElementById('mostrar').style.display = 'none';
      document.getElementById("ocultar").style.display = 'inline';
    }else{
      input.type = 'password';
      document.getElementById('mostrar').style.display = 'inline';
      document.getElementById("ocultar").style.display = 'none';
    }
}

function contadorChar(){
    let max = 100;
    let char = txtMensaje.value.length;
    let contador = (max - char);

    if(contador < 1){
        document.getElementById("numChar").innerHTML = "<span style='color : red';><i>Máximo permitido de carácteres.</i>"
    }else{
        document.getElementById("numChar").innerHTML = "quedan " + contador + " carácteres restantes";
    }
}

/* function validarRut(){
    let xrut = txtRut.value;
    let caracteres = "123456789-0";
    let valida = caracteres.charAt("txtRut");

    if(valida = caracteres){
        document.getElementById("valido").innerHTML = "SI"
    }
} */