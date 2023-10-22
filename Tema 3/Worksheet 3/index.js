//1
/*find largest number
find longest string
find even numbers
find odd numbers
find words that contain 'is'
assert all numbers are divisible by three
zip two arrays together
sort joined array from smallest to largest
remove the first word in the array
place a new word at the start of the array
replace some elements*/


// FIND LARGEST NUMBER

// function findLargestNumber(...array){
//     arrayNumeros = array[0];
//     array.forEach(number => {
//         if(number > arrayNumeros){
//             arrayNumeros = number;
//         }
//     })
//     return arrayNumeros;
// }

// console.log(findLargestNumber(1,2,3,4,10,9,7));

// FIND LONGEST STRING

// function findLongestString(...array){
//     var longestString = "";
//     array.forEach(string =>{
//         if(string.length>longestString.length){
//             longestString=string;
//         }
//     })
//     return longestString;
// }

// console.log(findLongestString("Omar","Aguacate","Francisco Ayala"))

// FIND EVEN NUMBERS

// function evenNumbers(...array){
//     arrayEven = [];
//     array.forEach(numero =>{
//         if(numero%2==0){
//             arrayEven.push(numero);
//         }
//     })
//     return arrayEven;
// }

// console.log(evenNumbers(2,3,4,5,6,7));

// FIND IS WORDS

// function findWords(...array){
//     string = array.filter(palabra => palabra.includes("is"));
//     return string;
// }
// console.log(findWords("jajajaja","isidoro","pepe"));


// FIND DIVISIBLE BY 3

// function numeroDivisible(...array){
//     arrayNumeros = [];
//     // array.forEach(numero => {
//     //     if(numero%3==0){
//     //         arrayNumeros.push(numero);
//     //     }
//     // })
//     // return arrayNumeros;
//     arrayNumero = array.filter(numero => numero%3==0);
//     return arrayNumero;
// }

// console.log(numeroDivisible(1,3,6,9,4));

// ZIP TWO ARRAYS

// function ZipTwoArrays(a,b){
//     return a.concat(b);
// }

// console.log(ZipTwoArrays([1,4],[2,6]));

// SORT JOINED ARRAY

// function sortJoinedArray(a,b){
//     return a.concat(b).sort((x,y) => x-y);

// }

// console.log(sortJoinedArray([0,1,4,22,-30],[2,6,10,0]));

// REMOVE FIRST WORD

// function removeFirstWord(...array){
//     array.shift()
//     return array;
// }

// console.log(removeFirstWord("Tomate","Pepino","Perejil",));


// PLACE NEW WORD AT START

// function newWordAtStart(...array){
//     array.unshift("Hola");
//     return array;
// }

// console.log(newWordAtStart("Mundo"));


// REPLACE SOME ELEMENTS

// function replaceElements(...array){
// array.splice(0,2,"Salmón","Trucha","Bacalao");
// return array      


// }

// console.log(replaceElements("Tomate","Perejil","Anchoa","Judías","Pepino"));


//2

// var arrayNombres = ["john Smith", "Jackie Chan", "Omar Qneiby", "Alex Perez"];

// var nombresConJ = arrayNombres.filter(nombre => nombre.toUpperCase().startsWith("J")); //Filtramos los nombres que empiezan por J
// var inicialesNombre = nombresConJ.map(nombre => nombre.toUpperCase().split(" ").map(inicial => inicial[0]).join("")); //Para cada nombre los separa, luego para cada nombre separado coge la primera letra. Y los une.
// var ordenadoAlfabeticamente = inicialesNombre.sort();

// console.log(ordenadoAlfabeticamente);

//3

// var tablero = [
//     [34,21,32,41,25],
//     [14,42,43,14,31],
//     [54,45,52,42,23],
//     [33,15,51,31,35],
//     [21,52,33,13,23]
// ];

// var condicion = true;
// var fil = 0;
// var col = 0;

// while(condicion){
//     console.log(`Estamos en la fila: ${fil+1}, y la columna: ${col+1}`);
//     if(tablero[fil][col]==((fil+1)*10+(col+1))){
//         console.log(`!La fila y la columna coinciden con el número de la celda!`)
//         console.log(`Enhorabuena has encontrado el tesoro: ${fil+1}${col+1}`);
//         condicion=false;
//     }else{
//         var siguienteComprobacion = tablero[fil][col];
//         fil = Math.floor((siguienteComprobacion/10)-1);
//         col = (siguienteComprobacion%10)-1;
//     }
// }

