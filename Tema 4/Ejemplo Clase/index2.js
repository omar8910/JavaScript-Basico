window.onload = () => {
    // Para el ejemplo del formulario:

    // const formulario = document.querySelector("form");
    // const nombre = document.getElementById("nombre");
    // const apellidos = document.getElementById("apellidos");
    // const mensaje = document.querySelector("p");

    // formulario.addEventListener("submit", (e) => {
    //     if(nombre.value === "" || apellidos.value === ""){
    //         e.preventDefault(); // Todos los objetos tienen un ".preventDefault()" que para el comportamiento por defecto, que en caso de los formularios es recargar la página.
    //         mensaje.textContent = "Debes rellenar ambos campos"; // .textContent es el texto que hay dentro de la etiqueta.
    //     }
    // });

    // Para el ejemplo de bubbling: bubbling es cuando se ejecuta un evento en un elemento y se propaga a los elementos padres.

    // const btn = document.querySelector("button");
    // const box = document.querySelector("div");
    // const video = document.querySelector("video");
    
    // btn.addEventListener("click", () => box.classList.remove("hidden"));
    // video.addEventListener("click", (e) => {
    //     e.stopPropagation(); // Para que no se propague el evento, por lo tanto al hacer click en el video no se cerrará la caja, pero si en cualquier otro sitio.
    //     video.play();
    // });
    // box.addEventListener("click", () => box.classList.add("hidden"));
    
    // Otro ejemplo de bubbling:
      
      const container = document.querySelector("#container");
      
      container.addEventListener("click", (event) => {
        if(event.ctrlKey){
            event.target.style.backgroundColor = "white"; // event.target es el elemento que ha recibido el evento. Y el elemento que ha recibido el evento es el que ha sido clickado.
        }else{
            event.target.style.backgroundColor = bgChange(); // bgChange() es una función que devuelve un color aleatorio y se lo asignamos al elemento que ha recibido el evento.
        }
      });
}


// Las funciones van después del window.onload para que se carguen después de que se cargue la página.
function random(number) {
    return Math.floor(Math.random() * number);
  }
  
  function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
  }