window.onload = function() {
    inputUsuario = document.getElementById("usuario");
    condiciones = document.querySelectorAll("li");
    inputUsuario.addEventListener("keyup", () => comprobarCondiciones(inputUsuario));

}

oneLowerCase = new RegExp(".*[a-z].*");
oneUpperCase = new RegExp(".*[A-Z].*");
minimunChars = new RegExp("^.{6,}$")


function comprobarCondiciones(e){
    if(oneLowerCase.test(e.value)){
        condiciones[0].style.color = "green";
    }else{
        condiciones[0].style.color = "red";
    }

    if(oneUpperCase.test(e.value)){
        condiciones[1].style.color = "green";
    }else{
        condiciones[1].style.color = "red";
    }

    if(minimunChars.test(e.value)){
        condiciones[2].style.color = "green";
    }else{
        condiciones[2].style.color = "red";
    }
}

