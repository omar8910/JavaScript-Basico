window.onload = () => {
    arrayFrutas = ["coconut", "coconut", "grape", "grape", "lemon", "lemon", "pineapple", "strawberry", "strawberry"];
    cartasGiradas = [];
    parejasEncontradas = [];
    iniciado = false;
}

function generarCartas(arrayFrutas) {
    return arrayFrutas.sort(() => Math.random() - 0.5);
}

function mostrarCarta(carta) {
    carta.children[0].classList.add("carta");

}

function ocultarCarta(carta) {
    carta.children[0].classList.remove("carta");
}

function clickActivadoCarta(carta) {
    carta.addEventListener("click", clickCarta());
}

function desactivarClickCarta(carta) {
    carta.removeEventListener("click", clickCarta());
}

function iniciarCronometro() {
    intervalo = setInterval(() => {
        segundos = document.getElementById("segundos");
        minutos = document.getElementById("minutos");
        formateoSegundos = parseInt(segundos.innerHTML);
        formateoMinutos = parseInt(minutos.innerHTML);
        if (formateoSegundos < 60) {
            if (formateoSegundos < 10) {
                segundos.innerHTML = "0" + (++formateoSegundos);
            } else {
                segundos.innerHTML++;
            }
        } else {
            segundos.innerHTML = "00";
            if (formateoMinutos < 60) {
                if (formateoMinutos < 10) {
                    minutos.innerHTML = "0" + (++formateoMinutos);
                } else {
                    minutos.innerHTML++;
                }
            }
        }
    }, 1000);
    iniciado = true;
}

function clickCarta(e) {
    if (!iniciado) {
        iniciarCronometro();
    }
    carta = document.getElementById(e.target.id);
    if (!(cartasGiradas.includes(carta))) {
        cartasGiradas.push(carta);
    }
    imagen = carta.querySelector(".carta_volteada_trasera img");
    desactivarClickCarta(carta.imagen);
    mostrarCarta(carta);
    if (cartasGiradas.length == 2) {
        for (carta of cartas) {
            desactivarClickCarta(carta);
        }
        comprobarCartas();
        setTimeout(() => {
            for (carta of cartas) {
                clickActivadoCarta(carta);
            }

            for (carta of parejasEncontradas) {
                carta.imagen('click', clickCarta) // Lo mismo necesitamos otro parametro.
            }
        }, 1000);

    }
}

function comprobarCartas() {
    imagen = carta.children[0].children[1].children[0];

    for (carta of cartas) {
        desactivarClickCarta(carta);
    }
    if(cartasGiradas[0].imagen.src != cartasGiradas[1].imagen.src){
        setTimeout(() => {
            ocultarCarta(cartasGiradas[0]);
            ocultarCarta(cartasGiradas[1]);
            cartasGiradas = [];
        },1000)

    }else{
        parejasEncontradas.push(...cartasGiradas);
        if(parejasEncontradas.length == 10){
            window.clearInterval(intervalo);
            intervalo = null;
            
        }
    }











}