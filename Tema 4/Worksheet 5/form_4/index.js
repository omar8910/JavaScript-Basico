window.onload = ()=>{
    formulario = document.getElementById("formulario");
    inputs = document.querySelectorAll(".mainInputs");
    divError = document.getElementById("mensajesDeError");
    formulario.addEventListener("submit", (e)=>{e.preventDefault()});
    formulario.addEventListener("submit", comprobarInputs);
    for(let i=0; i < patrones.length; i++){
        inputs[i].addEventListener("keyup", (e)=>{comprobarPatron(e, patrones[i], alertasDeError[i])})
    }
    inputs[5].addEventListener("keyup", ()=>{comprobarPass(inputs[4], inputs[5])})

}

patrones=[
    /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Nombre
    /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Apellidos
    /^[0-9]{9}$/, // Telefono
    /^([\w-\.]+@([\w-])+\.)+[\w-]{2,4}$/, // Email
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/ // Password
]

alertasDeError = [
    "El nombre solo puede contener letras",
    "Los apellidos solo puede contener letras",
    "El teléfono debe tener 9 dígitos",
    "Ejemplo de email: email@email.com",
    "La contraseña debe incluir 1 minúscula, 1 mayúscula, 1 dígito y un carácter especial",
]

function comprobarPatron(e, patron, alerta){
    expresion = new RegExp(patron); 
    if(expresion.test(e.target.value) == false){
        e.target.style.border = "1px solid red";
        divError.innerHTML = alerta;
        divError.style.opacity = "1";
    }else{
        e.target.style.border = "1px solid green";
        divError.style.opacity = "0";
    }
}

function comprobarPass(password, confirmarPassword){
    if(confirmarPassword.value == password.value){
        confirmarPassword.style.border = "1px solid green";
        divError.style.opacity = "0";
    }else{
        confirmarPassword.style.border = "1px solid red";
        divError.innerHTML = "Las contraseñas deben ser iguales";
        divError.style.opacity = "1";
    }
}

function comprobarInputs(){
    for(input of inputs){
        if(input.value == ""){
            divError.innerHTML = "No puedes dejar campos vacíos.";
        }
    }
}
