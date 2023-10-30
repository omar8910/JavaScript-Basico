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



function LeerCookie(identificador){
    arrayCookies = document.cookie.split(";");
    for (let i = 0; i < arrayCookies.length; i++) {
        if(arrayCookies[i].split("=")[0]==identificador && arrayCookies[i].split("=")[1]!=null){
            return arrayCookies[i].split("=")[1];
        }
    }    
    return null

}

function BorrarCookie(){

}


}

function CrearCookie(identificador,valor){
    document.cookie = `${identificador} = ${valor}`;
}