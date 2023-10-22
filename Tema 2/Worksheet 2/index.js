//1
// //a
// document.write(`Numero aleatorio: ${Math.random()}<br>`);
// //b
// document.write(`Numero aleatorio: ${Math.round(Math.random()*100)}<br>`);
// //c
// var max = parseInt(prompt("Introduzca un número: "));
// var min = parseInt(prompt("Introduzca otro número: "));

// document.write(`Numero aleatorio entre dos valores: ${Math.round(Math.random()*(max-min)+min)}`);

//5

// var a = parseInt(prompt("Introduzca el valor de a: "));
// var b = parseInt(prompt("Introduzca el valor de b: "));
// var c = parseInt(prompt("Introduzca el valor de c: "));

// document.write(`La ecuación es: ${a}x²+${b}x+${c}=0 <br>`);

// //(-b+-sqrt(b²-4*a*c))/(2*a)
// var contenidoRaiz = (Math.pow(b,2)-4*a*c);

// if(contenidoRaiz<0){
//     document.write("No tiene solución");
// }
// else{
//     var x1= (-b+Math.sqrt(contenidoRaiz))/(2*a);
//     var x2= (-b-Math.sqrt(contenidoRaiz))/(2*a);
//     document.write(`Las soluciones son: ${x1} y ${x2}`);
// }

//7

// document.write(`<table border="1" style="text-align:center">`);
//     document.write(`<thead>`);
//     document.write(`<td style="padding:2px">Num Ascendente</td>`);
//     document.write(`<td style="padding:2px">Seno</td>`);
//     document.write(`</thead>`);

//     document.write(`<tbody>`);
//     for(i=0;i<=10;i++){
//         document.write(`<tr>`);
//             document.write(`<td>${i}</td>`);
//             document.write(`<td>${Math.sin(i)}</td>`);
//         document.write(`</tr>`);
//     }
//     document.write(`</tbody>`);

// document.write(`</table>`);ç

//8
n = Math.round(Math.random()*(3-1)+1);

document.getElementById("imagenAleatoria").src =`img/${n}.jpg`;





