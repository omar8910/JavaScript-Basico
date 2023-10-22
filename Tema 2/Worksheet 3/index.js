//1

//a
// function invierteCadena(cad_arg){
//     let cadenaInvertida= "";
//     for(i=cad_arg.length-1;i>=0;i--){
//         cadenaInvertida += cad_arg[i];
//     }
//     return cadenaInvertida;
// }

// var resultado = invierteCadena("hola");
// console.log(resultado);

// Con métodos
// function invierteCadena(cad_arg){
//     var cadenaInvertida =cad_arg.split("").reverse().join("");
//     return cadenaInvertida;
// }

// var resultado = invierteCadena("hola");
// console.log(resultado);


//b
// function inviertePalabras(cad_arg){
//     var cadenaInvertida = cad_arg.split(" ");
//     var cadenaFinal="";
//     for(i=cadenaInvertida.length-1;i>=0;i--){
//         cadenaFinal+=cadenaInvertida[i] + " ";
//     }
//     return cadenaFinal;
// }

// var resultado = inviertePalabras("hola que tal estás");
// console.log(resultado);


// // Con métodos
// function inviertePalabras(cad_arg){
//     var cadenaInvertida = cad_arg.split(" ").reverse().join(" ");
//     return cadenaInvertida;
// }

// var resultado = inviertePalabras("hola que tal estás");
// console.log(resultado);

//c
// function encuentraPalabraMasLarga(cad_arg){
//     var stringSeparado = cad_arg.split(" ");
//     var stringLargo= "";
//     for(let i=0;i<stringSeparado.length;i++){ //Recorremos el array de las palabras separadas.
//         if(stringSeparado[i].length>stringLargo.length){ //Si la palabra en la que estamos es más larga que la que teníamos guardada, la guardamos.
//             stringLargo =stringSeparado[i];
//         }
//     }
//     return stringLargo.length;
// }

// var resultado = encuentraPalabraMasLarga("Ayer me encontré con un ornitorrnico esternocleidomastoideo");
// console.log(resultado);

// d
// function filtraPalabrasMasLargas(cad_arg,num){
//     palabrasSeparadas = cad_arg.split(" ");
//     palabraConcuerdaConNum = "";
//     for(i=0;i<palabrasSeparadas.length;i++){
//         if(num<=palabrasSeparadas[i].length){// Si el número que tenemos es igual a la longitud de la palabra en la que estamos la guardamos.

//             // Si tiene varias palabras las mostraremos todas.
//             palabraConcuerdaConNum+=palabrasSeparadas[i] + " ";

//         }
//     }
//     return palabraConcuerdaConNum;
// }

// var resultado = filtraPalabrasMasLargas("Hola que tal hoy comemos salchichas",3);
// console.log(resultado);

//e
// function cadenaBienFormada(cad_arg){
//     cadenaFormateada = cad_arg.split(" ");
//     cadenaFinal="";
//     for(i=0; i<cadenaFormateada.length;i++){
//         if(i==0){
//             /* Cojo el primer caracter de la palabra y lo pongo en mayúscula/minuscula,luego con el slice corto la palabra desde el segundo caracter hasta el final y lo añado a la cadena final. */
//             cadenaFinal+=cadenaFormateada[i].charAt(0).toUpperCase() + cadenaFormateada[i].slice(1) + " ";
//         }
//         else{
//             cadenaFinal+=cadenaFormateada[i].charAt(0).toLowerCase() + cadenaFormateada[i].slice(1)+ " ";
//         }
// } return cadenaFinal;
// } 

// var resultado = cadenaBienFormada("hola que tal");
// console.log(resultado);

//2
// function cadenaTipo(cad_arg){
//     if(cad_arg == cad_arg.toUpperCase()){
//         return "La cadena está formada solo por mayúsculas";
//     }
//     else if(cad_arg == cad_arg.toLowerCase()){
//         return "La cadena está formada solo por minúsculas";
//     }
//     else{
//         return "La cadena está formada por minúsculas y mayúsculas";
//     }
// }

// var resultado = cadenaTipo("LLEVO 45 MINUTOS COMPLICANDOME LA VIDA");
// console.log(resultado);

//3

// function localizarPosicionesString(cad_arg,string){
//     var cadenaSeparada = cad_arg.split(" ");
//     cadenaPosiciones= [];
//     for(i=0;i<cadenaSeparada.length;i++){
//         if(string==cadenaSeparada[i]){
//             cadenaPosiciones.push(i);
//         }
//     }
//     return cadenaPosiciones;
// }

// var resultado = localizarPosicionesString("Jefe estoy cansado, estoy muy cansado","cansado");
// console.log(resultado);

// 4
// function ordenarLetras(cad_arg){
//     consonantes = "";
//     vocales = "";
//     for(i=0;i<cad_arg.length;i++){
//         if(cad_arg[i]!=" "){
//             if(cad_arg[i]==("a"||"A")||cad_arg[i]==("e"||"E")||cad_arg[i]==("i"||"I")||cad_arg[i]==("o"||"O")||cad_arg[i]==("u"||"U")){
//                 vocales += cad_arg[i];
//             }
//             else{
//                 consonantes += cad_arg[i];
//             }
//         }
//     }
//     return consonantes+vocales;
// }

// var resultado = ordenarLetras("Imaginate que esto funciona");
// console.log(resultado);

//5 
// Desarrolla una función que elimine caracteres repetidos de una cadena de texto y los espacios.

// function eliminaCaracteresRepetidos(cad_arg){
//     var cadenaSinRepetidos = "";
//     for(i=0;i<cad_arg.length;i++){
//         if(cad_arg[i]!=" "){
//             if(cadenaSinRepetidos.indexOf(cad_arg[i])==-1){
//             cadenaSinRepetidos+=cad_arg[i];
//             }
//             }
//         }
//         return cadenaSinRepetidos;
// }
// var resultado = eliminaCaracteresRepetidos("Imaginate que esto funciona");
// console.log(resultado);

//6

// function esSubcadena(cad_arg,subcadena){
//     var posicion = cad_arg.indexOf(subcadena);
//     if(posicion!=-1){
//         return "La subcadena está en la posición " + posicion;
//     }
//     else{
//         return "La subcadena no está en la cadena";
//     }
// }

// var resultado = esSubcadena("Imaginate que esto funciona","esto funciona");
// console.log(resultado);

//7

// function esPalindromo(cad_arg){
//     palabraSeparada= cad_arg.toLowerCase().split(" ").join("");
//     palabraPalindroma= palabraSeparada.split("").reverse().join("");

//     if(palabraSeparada===palabraPalindroma){
//         return "La cadena es palíndroma";
//     }
//     else{
//         return "La cadena no es palíndroma";
//     }
// }

// var resultado = esPalindromo("Sé verla al revés");
// console.log(resultado);


//8
// function contabilizarPalabras(cad_arg){
//     var palabrasSeparada = cad_arg.split(" ");
//     var arrayPalabras=[];
//     for(i=0;i<palabrasSeparada.length;i++){
//         if(palabrasSeparada[i]!=""){
//             arrayPalabras.push(palabrasSeparada[i]);
//         }
//     }
//     return arrayPalabras.length;
// }

// var resultado = contabilizarPalabras(" Imaginate  lo que pudo pasar     ");
// console.log(resultado);

//9

// Ejercicio pasado por rodrigo:
// function invierteCadena(cadena){
//     var alReves ="";
//     for (let i = cadena.length-1; i>=0; i--) {
//         alReves += cadena[i];
//     }
//     return alReves
// }



// var cadena = "adios"
// var alReves= invierteCadena(cadena);
// var cadenaSplit = cadena.toUpperCase().split("");
// var alRevesSplit = alReves.toUpperCase().split("");
// document.write("<table>")
// for (let i = 0; i < cadena.length; i++) {
//     document.write("<tr>") 
//     if(i==0){
//         for (let i = 0; i < cadenaSplit.length; i++) {
//             document.write("<td>"+cadenaSplit[i]+"</td>")
//         }
//     }
//     if(i>0 && i<cadena.length-1){
//         document.write("<td>"+cadenaSplit[i]+"</td>");
//         if(i>0 && i<cadena.length-1){
//             for (let j = 1; j < cadena.length-1; j++) {
//                 document.write("<td></td>")
//             }
//         }
//         document.write("<td>"+alRevesSplit[i]+"</td>");
//     }
//     if(i==cadena.length-1){
//         for (let i = 0; i < alRevesSplit.length; i++) {
//             document.write("<td>"+alRevesSplit[i]+"</td>")
            
//         }
//     }
//     document.write("</tr>")
// }   
// document.write("</table>")