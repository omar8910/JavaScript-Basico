window.onload = () => {
    // Ejemplo de Cookie.
    // if(document.cookie==""){
    //     nombre = prompt("Introduce tu nombre");
    //     document.cookie = "nombre="+nombre;
    // }else{
    //     let miH1 = document.querySelector("h1");
    //     miH1.innerHTML = "Hola "+document.cookie.split(";")[0].split("=")[1];
    // }

    /* Crea 3 funciones genéricas para el manejo de cookies:
        a) CrearCookie(identificador,valor,fechaExpiracion): Crea la cookie con sólo un par identificador=valor.
        b) LeerCookie(identificador): Devuelve el valor dentro de la cookie para el identificador indicado si existe o null en caso contrario.
        c) BorrarCookie().
    */
    let titulo = document.getElementById("titulo");
    if (LeerCookie("username")) {
        titulo.innerHTML = "Bienvenido, " + LeerCookie("username");
    } else {
        let username = prompt("¿Cómo te llamas?");
        CrearCookie("username", username, 0.00347);
        titulo.innerHTML = "Bienvenido, " + LeerCookie("username");
    }

    let logout = document.getElementById("logout");
    logout.addEventListener("click", () => {
        BorrarCookie("username");
        location.reload();
    });
}

function CrearCookie(identificador, valor, fechaExpiracion) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (fechaExpiracion * 24 * 60 * 60 * 1000));
    document.cookie = `${identificador}=${valor};expires=${fecha.toUTCString()};path=/`;

}


function LeerCookie(identificador) {
    let nombre = identificador + "=";
    let nombreDecodificado = decodeURIComponent(document.cookie);
    let cookies = nombreDecodificado.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nombre) == 0) {
            return cookie.substring(nombre.length, cookie.length);
        }
    }
    return null;
}

function BorrarCookie(identificador) {
    CrearCookie(identificador, "", 0);
}

