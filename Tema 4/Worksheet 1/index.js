window.onload =()=>{


// const btn = document.querySelector('button');
const btn = document.getElementById('btn'); // Podemos referenciarnos al boton del HTML con getElementById (id="btn") o con querySelector (class="btn").
const btnG = document.getElementById('btnG'); // Podemos referenciarnos al boton del HTML con getElementById (id="btn") o con querySelector (class="btn").
const btnB = document.getElementById('btnB'); // Podemos referenciarnos al boton del HTML con getElementById (id="btn") o con querySelector (class="btn").
const miH1 = document.getElementById('miH1');


function random(number){
    return Math.floor(Math.random() * (number+1));
}

// El primer parámetro del addEventListener es el evento que queremos escuchar y el segundo es la función que queremos que se ejecute cuando se produzca el evento.
// Tenemos eventos como "click" (un solo click), "dblclick" (doble click), "focus" (al tener el foco con la tecla TAB), "blur" (al perder el foco)

btn.addEventListener('click', pintarColorRandom); // Añadimos un evento al botón. En este caso, cuando se haga click en el botón, se ejecutará la función pintarColorRandom.
btn.addEventListener('blur', ()=> document.body.style.backgroundColor = "white") ; // Al ser el mismo botón, al hacer click se ejecutarán las dos funciones.
// btn.addEventListener('click', levantaAlert);
btnG.addEventListener('click', pintarColorRandom);
btnB.addEventListener('click', pintarColorRandom);


function pintarColorRandom(e) { // En vez de poner la función dentro del addEventListener, podemos crearla fuera y llamarla desde el addEventListener.
    console.log(e); // El parámetro e es el evento que se ha producido. En este caso, el evento es el click.
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = e.target.innerHTML; //Accedemos al elemento que ha producido el evento con e.target y le cambiamos el color de fondo.
    console.log("Has pulsado el botón");
};

// function levantaAlert(){
    // console.log("Funciona");
// }











}