window.onload = () => {

if(document.cookie==""){
    nombre = prompt("Introduce tu nombre");
    document.cookie = "nombre="+nombre;
}else{
    let miH1 = document.querySelector("h1");
    miH1.innerHTML = "Hola "+document.cookie.split(";")[0].split("=")[1];
}

}
