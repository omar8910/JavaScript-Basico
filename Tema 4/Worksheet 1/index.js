// window.onload = () => {
//1 Captura el evento onClick del raton para que cada vez que se de un click en el body se ejecute un alert.

// const body = document.querySelector("body");
// body.addEventListener("click", () => {
//     alert("Has hecho click");
// });

//2 Captura el movimineto del ratón, para que se muestre la posición en la que se encuentra cada momento.

// const body = document.querySelector("body");
// body.addEventListener("mousemove", (e)=> {
//     console.log(e.clientX,e.clientY);
// });

//3 Haciendo uso del evento onLoad, muestra el tiempo transcurrido desde la carga de la pagina.

// window.addEventListener("load", () => {
//     let fecha = new Date();
//     let seg = fecha.getSeconds();
//     let min = fecha.getMinutes();
//     let hora = fecha.getHours();
//     console.log(hora + ":" + min + ":" + seg);
// });


//4

window.addEventListener("load", ()=>{
    const table = document.querySelector("table");
    const boton = document.querySelector("button");
    for(i=0;i<100;i++){
        const fila = document.createElement("tr");
        for(j=0;j<100;j++){
            const columna = document.createElement("td"); // Creamos los elementos dentro de la tabla
            columna.addEventListener("mouseover", (e)=>{ // Le damos los eventos a la COLUMNA
                if(e.ctrlKey){
                    columna.style.backgroundColor = "red";
                }else if(e.shiftKey){
                    columna.style.backgroundColor = "blue";
                }else if(e.altKey){
                    columna.style.backgroundColor = "white";
                }
            });
            fila.appendChild(columna);
            boton.addEventListener("click", ()=>{
                columna.style.backgroundColor = "white";
            });

        }
        table.appendChild(fila);
    }

});
