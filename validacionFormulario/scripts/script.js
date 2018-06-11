function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#botonEnviar").click(function(){
    var campoVacio = "";
    var mensajeError = "";  

    //Verificacion de campos no vacios
    if($("#email").val() == "")
    {
        campoVacio = campoVacio+"Email<br>";
    }
    if($("#telefono").val() == "")
    {
        campoVacio = campoVacio+"Telefono<br>";
    }
    if($("#password").val() == "")
    {
        campoVacio = campoVacio+"Password<br>";
    }
    if($("#confirmarPass").val() == "")
    {
        campoVacio = campoVacio+"Confirmación Password<br>";
    }
    if(campoVacio != "")
    {
        mensajeError = "<p>Los siguientes campos están vacios: </p>"+campoVacio+mensajeError;
    }

    //  Validamos el formato del email
    if(isEmail($("#email").val()) == false)
    {
        mensajeError = mensajeError+"<p> Tu dirección de email no es válida.</p>";
    }
    // Validación numérica del campo teléfono
    if($.isNumeric($("#telefono").val()) == false)
    {   
        mensajeError = mensajeError+"<p> Tu teléfono no es válido.</p>";
    }

    // Comparando las contraseñas
    if($("#password").val() != $("#confirmarPass").val())
    {
        mensajeError = mensajeError+"<p> Las contraseñas no coinciden.</p>";
    }

    if(mensajeError != "")
    {
        $("#mensajeErrorCampos").html(mensajeError);
    }
    else{
        $("#mensajeExito").html("<p>Te has regostrado con exito</p>");
    }


});