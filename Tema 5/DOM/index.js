window.onload = () => {
    // Ejemplo 1
    // boton1 = document.getElementsByTagName("button")[0];
    // boton1.textContent = "Cambiame a un gato grande!";
    // imagen = document.getElementById("imagen")

    // boton1.addEventListener('click', ()=>{
    //     if (boton1.textContent === "Cambiame a un gato grande!"){
    //         console.log("Gato Grande");
    //         imagen.src = "gatogrande.jfif";
    //         boton1.textContent = "Cambiame a un gato pequeño!";
    //     }else{
    //         console.log("Gato Pequeño");
    //         imagen.src = "gatopequeño.jfif";
    //         boton1.textContent = "Cambiame a un gato grande!";
    //     }

    // })

    // Ejemplo 2
    // document.getElementsByTagName("button")[0].addEventListener("click", () => {
    //     var newImg = document.createElement("img");
    //     newImg.src = "gatogrande.jfif";
    //     document.body.appendChild(newImg);

    //     document.getElementsByTagName("button")[0].textContent = "Pulsado!";
    // });

    // Ejemplo 3
    document.getElementsByTagName("button")[0].addEventListener("click", () => {
        let lista = document.getElementById("lista");
        let nuevaOpcion = document.createElement("li");
        nuevaOpcion.textContent = document.getElementById("opcion").value;
        nuevaOpcion.addEventListener("click", borrarLI);
        lista.appendChild(nuevaOpcion);
        document.getElementById("opcion").value = "";
    });

}
// Para crear elementos en el DOM, se utiliza el método document.createElement("elemento").
// Para añadirle un texto a un elemento, se utiliza el método element.textContent = "texto" o element.innerHTML = "texto".
// Para añadir un elemento al DOM, se utiliza el método element.appendChild(elemento).

// Como borrar un nodo del DOM:
function borrarLI(e){
    console.log(`Borrando la opción: "${e.target.textContent}"`);
    e.target.parentNode.removeChild(e.target);
}