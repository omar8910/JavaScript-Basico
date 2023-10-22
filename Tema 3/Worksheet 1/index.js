//2

// function tirarDado(){
//     var aleatorio = Math.floor((Math.random()*(6)+1));

// return aleatorio;
// }

// console.log(lanzamiento());

//3

// function lanzamiento(){
//     var Uno = 0;
//     var Dos = 0;
//     var Tres = 0;
//     var Cuatro = 0;
//     var Cinco = 0;
//     var Seis = 0;
//     var numeros = [];
//     for(i=0;i<=6000;i++){
//         // aleatorio;
//         var aleatorio = tirarDado();
//         switch (aleatorio){
//             case 1:
//                 Uno++;
//                 break;
//             case 2:
//                 Dos++;
//                 break;
//             case 3:
//                 Tres++;
//                 break;
//             case 4:
//                 Cuatro++;
//                 break;
//             case 5:
//                 Cinco++;
//                 break;
//             case 6:
//                 Seis++;
//                 break;
//         }
//     }
//     numeros = [`Numero 1: ${Uno}`,
//     `Numero 2: ${Dos}`,
//     `Numero 3: ${Tres}`,
//     `Numero 4: ${Cuatro}`,
//     `Numero 5: ${Cinco}`,
//     `Numero 6: ${Seis}`
// ];

// return numeros;
// }

// console.log(lanzamiento());


//6.
// function calcularPotencia(num,exp){
//     if(exp==0){
//         return  1
//     }
//     return num * calcularPotencia(num,exp-1);
// }

// console.log(calcularPotencia(5,8));

//7

// function calcularFact(num){
//     if(num==0){
//         return 1
//     }
//     return num* calcularFact(num-1);
// }

// document.write("<table border='1' style= 'text-align:center'>");
// document.write("<tr>");
// document.write(`<td>Número</td>`);
// document.write(`<td>Factorial</td>`);
// document.write("</tr>");
// for(i=0;i<10;i++){
//     document.write("<tr>");
//         document.write(`<td>${i}</td>`);
//         document.write(`<td>${calcularFact(i)}</td>`);
//     document.write("</tr>");
// }
// document.write("</table>");