window.onload = function () {
    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    dni = document.getElementById("dni");
    telefono = document.getElementById("telefono");
    correo = document.getElementById("email");
    usuario = document.getElementById("usuario");

    nombre.addEventListener("blur", () => {
        if(!validarMayuscula(nombre.value) || !validarLongitud(nombre.value) || nombre.value == null ){
            nombre.style.border = "2px solid red";
        }else{
            nombre.style.border = "2px solid green";
        }
    });

    apellidos.addEventListener("blur", () => {
        if(!validarMayuscula(apellidos.value) || apellidos.value == null){
            apellidos.style.border = "2px solid red";
        }else{
            apellidos.style.border = "2px solid green";
        }
    });

    dni.addEventListener("blur", () => {
        if(!validarDNI(dni.value) || dni.value == null){
            dni.style.border = "2px solid red";
        }else{
            dni.style.border = "2px solid green";
        }
    });

    telefono.addEventListener("blur", () => {
        if(!validarNumero(telefono.value) || telefono.value == null || telefono.value.length != 9){
            telefono.style.border = "2px solid red";
        }else{
            telefono.style.border = "2px solid green";
        }
    });

    correo.addEventListener("blur", () => {
        if(!validarCorreo(correo.value) || correo.value == null){
            correo.style.border = "2px solid red";
        }else{
            correo.style.border = "2px solid green";
        }
    });

    usuario.addEventListener("blur", () => {
        if(!validarLongitud(usuario.value) || !validarCaracteresEspeciales(usuario.value) || !validarNumero(usuario.value) || usuario.value == null){
            usuario.style.border = "2px solid red";
        }else{
            usuario.style.border = "2px solid green";
        }
    } );

}




function validarMayuscula(string) {
    //Con expresiones regulares
    return string.match(/[A-Z]/) ? true : false;
}

function validarCaracteresEspeciales(string){
    return string.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) ? true : false;
}

function validarCorreo(string){
    return string.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/) ? true : false;
}

function validarTarjetaCredito(string){
    return string.match(/^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/) ? true : false;
}

function validarLongitud(string){
    return string.length >= 8 ? true : false;
}

function validarNumero(string){
    return string.match(/[0-9]/) ? true : false;
}

function validarDNI(string){
    return string.match(/^[XYZ]?\d{5,8}[A-Z]$/) ? true : false;
}
