// <------ CONDICIONALES O IF -------->

// 1.-
// var numero = parseInt(prompt("Introduzca un número par: "));

// if(numero%2==0){
//     alert("El número introducido es par");
// }
// else{
//     alert("El número introducido no es par");
//     numero = parseInt(prompt("Introduzca un número par: "))
// }

// 2.-
// var edad = parseInt(prompt("Introduzca su edad: "));

// if(edad>=18){
//     alert("Es mayor de edad");
// }
// else if(edad<0){
//     alert("No puede introducir número negativos");

// }
// else{
//     alert("No es mayor de edad");
// }

//3.-
// var edad = parseInt(prompt("Introduzca su edad: "));
// var nacimiento = prompt("Introduzca su ciudad de nacimiento: ").toLowerCase();

// if(edad>25 && nacimiento=="madrid"){
//     alert("Enhorabuena");
// }
// else{
//     alert("No cumple con los requisitos");
// }

//4.-
// var numero = parseInt(prompt("Introduzca un número: "));

// if(numero>100){
//     alert(numero-(numero*0.15));
// }
// else{
//     alert("Introduzca un número superior a 100 para recibir un descuento");
// }

//5.-
// var nombre = prompt("Introduzca su nombre: ");

// if(nombre.slice(-1)=="o"){
//     alert("Bienvenido");
// }
// else if(nombre.slice(-1)=="a"){
//     alert("Bienvenida");
// }

//6.-
// var alojamiento = prompt("Introduzca la ciudad en la que vive: ").toLowerCase();
// var edad= parseInt(prompt("Introduzca su edad: "));

// if(alojamiento=="madrid" && (edad>=18 && edad<=30) ){
//     alert("Puede acceder al carnet de empresarios");
// }
// else{
//     alert("No cumple con los requisitos para acceder al carnet");
// }



// <------ IF / ELSE -------->

//1.-
// var nombre = prompt("Introduzca su nombre: ").toLowerCase();
// var apellidos= prompt("Introduzca sus apellidos:");

// if(nombre=="ricardo"){
//     alert(apellidos);
// }
// else{
//     document.write(apellidos);
// }

//2.-
// var edad = parseInt(prompt("Introduzca su edad: "));

// if(edad >= 67){
//     alert("Cumple la edad para jubilarse");
// }
// else{
//     alert("No puede jubilarse");
// }

//3.-
// var edad = parseInt(prompt("Introduzca su edad: "));

// if(edad<5){
//     alert("Jardin de infancia");
// }
// else if(edad>=6 && edad<=11){
//     alert("Primaria");
// }
// else if(edad>=12 && edad<=16){
//     alert("ESO");
// }
// else if(edad>=17 && edad<=21){
//     alert("Bachillerato o Ciclos");
// }
// else{
//     alert("Universidad");
// }

//4.-
// var hermanos = parseInt(prompt("Introduzca cuantos hermanos tiene: "));
// var cantidad = parseInt(prompt("Introduzca una cantidad: "));

// if(hermanos>3){
//     alert(cantidad-(cantidad*0.15));
// }
// else if(hermanos<3){
//     alert(cantidad-(cantidad*0.05));
// }
// else if(hermanos==0){
//     alert(cantidad);
// }
// else{
//     alert(cantidad);
// }

// //5.-
// var examen1 = parseFloat(prompt("Introduzca la nota del primer examen: "));
// var examen2 = parseFloat(prompt("Introduzca la nota del segundo examen: "));
// var trabajo1 = parseFloat(prompt("Introduzca la nota del primer trabajo: "));
// var trabajo2 = parseFloat(prompt("Introduzca la nota del segundo trabajo: "));

// var mediaExamenes= ((examen1+examen2)/2)*0.75
// var mediaTrabajos= ((trabajo1+trabajo2)/2)*0.25

// if((mediaExamenes+mediaTrabajos>5) && trabajo1>=4.5 && trabajo2>=4.5 && examen1>=4.5 && examen2>=4.5){
//     alert("Estas aprobado");
// }else{
//     alert("No estas aprobado");
// }



// <------ SWITCH -------->

//1.-
// mes = prompt("Introduzca un mes para saber sus días: ").toLowerCase();

// switch(mes){
//     case "enero":
//     case "marzo":
//     case "mayo":
//     case "julio":
//     case "agosto":
//     case "octubre":
//     case "diciembre":    
//         alert("31 días");
//         break;

//     case "abril":
//     case "junio":
//     case "septiembre":
//     case "noviembre":
//         alert("30 días");
//         break;
        
//     case "febrero":
//         alert("28 días");
//         break;
// }


//2.-
// var numero = parseInt(prompt("Introduzca un número: "));


// switch(true){  //para que funcione tiene que ser true dentro del switch, porque?
//     case(numero%2==0 && numero%3==0):
//         document.write(`El número ${numero} es par y múltiplo de 3`);
//     break;
        
//     case(numero%2==0 && numero%5==0):
//         document.write(`El número ${numero} es par y múltiple de 5`);
//     break;
// }

//3.-
/* Crea	un	script	que	pida	al	usuario	dos	números	y	una	operación	(que	puede	ser	el	carácter	+,	-,	*	o	/).	
El	script	debe	devolver	el	resultado	de	la	operación	seleccionada	por	el	usuario. */

// var numero1 = parseInt(prompt("Introduzca un número: "));
// var numero2 = parseInt(prompt("Introduzca otro número: "));
// var operacion = prompt("Introduzca una operación: ");

// switch(operacion){
//     case "+":
//         document.write(`El resultado de la suma de ${numero1} y ${numero2} es: ${numero1+numero2}`);
//     break;

//     case "-":
//         document.write(`El resultado de la resta de ${numero1} y ${numero2} es: ${numero1-numero2}`);
//     break;
    
//     case "*":
//         document.write(`El resultado de la multiplicación de ${numero1} y ${numero2}es: ${numero1*numero2}`);
//     break;
    
//     case "/":
//         document.write(`El resultado de la divisón de ${numero1} y ${numero2} es: ${numero1/numero2}`);
//     break;
// }


// <------ BUCLES -------->

//1.-
// for(var numero = 0; numero <= 10; numero++){
//     document.write(`${numero}<hr>`);
// }

//2.-
// var numero = parseInt(prompt("Introduzca un número: "));

// for(numero; numero <=100; numero++){
//     document.write(`${numero}<br>`);
// }

//2.- CON WHILE
// var numero = parseInt(prompt("Introduzca un número: "));

// while(numero!=0){
//     numero = parseInt(prompt("Introduzca un número: "));
// }

//3.- CON FOR
// var numero = parseInt(prompt("Introduzca un número: "));

// for(;numero!=0; numero = parseInt(prompt("Introduzca un número: "))){ 
// }

//4.-
// var palabras = prompt("Introduzca una palabra: ").toLowerCase();

// while(palabras!="salir"){
//     document.write(palabras + "<br>");
//     palabras = prompt("Introduzca una palabra: ").toLowerCase();
// }

//5.-
// var suma = 0;

// for(i=10;i>=1;i--){
//     var numero = parseInt(prompt(`Introduzca un total de ${i} números: `));
//     suma +=numero;
//     document.write(`${numero} <br>`);

// }
// document.write(`La suma del total es ${suma}`);

//6.-

// var numero = parseInt(prompt("Introduzca un número: "));

// document.write(`Tabla de multiplicar del: <b>${numero}</b><br>`);

// for(i=0;i<=10;i++){
//     document.write(`${numero} x ${i} = ${numero*i} <br>`);
// }

//7-

var numeroAdivinar = parseInt(prompt("Introduzca un número a adivinar"));
var numeroIntroducido = parseInt(prompt("Introduzca un número para intentar adivinar el mágico: "));

while(numeroIntroducido!=numeroAdivinar){
    if(numeroIntroducido>numeroAdivinar){
        alert(`El número introducido ${numeroIntroducido} es mayor que el mágico`);
        numeroIntroducido = parseInt(prompt("Introduzca un número para intentar adivinar el mágico: "));
        
    }
    else if (numeroIntroducido<numeroAdivinar){
        alert(`El número introducido ${numeroIntroducido} es menor que el mágico`);   
        numeroIntroducido = parseInt(prompt("Introduzca un número para intentar adivinar el mágico: "));
    }
}
document.write("!Has Acertado!");
