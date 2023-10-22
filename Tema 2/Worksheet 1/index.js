//1
// const fecha = new Date(); //Primero tenemos que crear una variable con el objeto date.
 
// // Año actual.
// document.write(`Año: ${fecha.getFullYear()}<br>`);
// // Mes actual.
// document.write(`Mes: ${fecha.getMonth()+1}<br>`); // Toma valores del 0 al 11 como meses.
// // Dia actual.
// document.write(`Día: ${fecha.getDate()}<br>`); // Toma valores del 0-6 como semana (getDay)
// // Hora actual.
// document.write(`Hora: ${fecha.getHours()}<br>`);
// // Minutos actuales.
// document.write(`Minutos: ${fecha.getMinutes()}<br>`);
// // Segundos actuales.
// document.write(`Segundos: ${fecha.getSeconds()}<br>`);

//2

// var fechaHoy = new Date(); // Hay que crear un objeto fecha por cada variable.
// // fechaHoy:
// document.write(fechaHoy+"<br>");

// //fecha85: +85 dias
// fecha85 = new Date(); 
// fecha85.setDate(fechaHoy.getDate()+85);
// document.write(fecha85+"<br>");

// //fecha187: -187 dias
// fecha187 = new Date();
// fecha187.setDate(fechaHoy.getDate()-187);
// document.write(fecha187+"<br>");

// // Sumar 2 años a fecha85:
// fecha85.setYear(fechaHoy.getFullYear()+2);
// document.write(fecha85+"<br>");

// // Restar 24h a fecha 187
// fecha187.setHours(fechaHoy.getHours()-24);
// document.write(fecha187+"<br>");

// //
// fechaResto = new Date();
// fechaResto.setDate(fecha85.getDate()-fecha187.getDate());
// document.write(fechaResto);

//3
// var numero = 60;
// function cuentaAtrasConTimeOut(){
//     document.write(`${numero}<br>`);
//     numero--;
//     //TimeOut llama nuestra funcion 1 vez utilizaremos esta funcion dentro y fuera de nuestra funcion.
//     if(numero>=0){
//     setTimeout(cuentaAtrasConTimeOut,1000);
// }
// }
// setTimeout(cuentaAtrasConTimeOut,1000);

// Set Interval.

// var numero = 60;
// function cuentaAtrasConInterval(){
//     document.write(`${numero}<br>`);
//     numero--;
//     if(numero==-1){
//         clearInterval(miIntervalo);
//     }
// }
// miIntervalo = setInterval(cuentaAtrasConInterval,100); // Interval llama nuestra función continuamente.



//5
function miniReloj(){
    horario = new Date();
    document.getElementById("reloj").innerHTML= (`${horario.getHours()}:${horario.getMinutes()}:${horario.getSeconds()}<br>`);
    setTimeout(miniReloj,1000);
}

setTimeout(miniReloj,1000);

