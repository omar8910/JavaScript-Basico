//1

/* arguments es una palabra clave de JS que al no pasar valores
especificos a la función, para referirnos a dichos valores, utilizamos
esta palabra clave. */

//Con el spread operator

// function sumArgs(...args){
//     suma = 0;
//     for(let i=0;i<args.length;i++){  // for(let i of args)
//         suma +=args[i];
//     }
//     return suma;
// }

// var resultado = sumArgs(1,2,3,4,5,6);
// console.log(resultado);

//2

/*Typeof sirve que nos devuelva de los argumentos que se introduzca un tipo de dato que especifiquemos
typeof arguments[i] == 'number' o 'string' o 'boolean';*/

// function addOnlyNums(){
//     suma = 0;
//     for(i=0;i<arguments.length;i++){
//         if(typeof arguments[i] == 'number'){
//             suma +=arguments[i];
//         }
//     }
//     return suma;
// }
// var resultado = addOnlyNums(1,'cat',3,4);
// console.log(resultado);


// function addOnlyNums(...args){
//     suma = 0;
//     for(i=0;i<args.length;i++){
//         if(args[i]==Number(args[i])){
//             suma +=args[i];
//         }
//     }
//     return suma;
// }
// var resultado = addOnlyNums(1,'cat',3,4);
// console.log(resultado);



//3

// function countTheArgs(...args){
//     return args.length;
// }

// var resultado = countTheArgs('cat','dog','frog');
// resultado = countTheArgs('cat','dog','frog','bear');

// console.log(resultado);


//4
// function combineTwoArrays(args1,args2){
//     arrayCombinado = [];
//     return arrayCombinado = [...args1,...args2];
// }

// resultado = combineTwoArrays([1,2,3,4,5],["coches", "aceite", "drift"]);
// console.log(resultado);

//5

// function sumEveryOther(...args){
//     suma = 0;
//     for(i=0;i<args.length;i++){
//         if(i%2==0){
//             suma+=args[i];
//         }
//     }
//     return suma;
// }

// var resultado = sumEveryOther(10, 2, 11);
// console.log(resultado);

//6
// function onlyUniques(...args){
//     arrayUnicos = [];
//     for(i=0;i<args.length;i++){
//         for(j=0,unico = true;j<arrayUnicos.length&&unico;j++){
//         if(args[i]==arrayUnicos[j]){
//            unico = false;
//         }}
//         if(unico)
//             arrayUnicos.push(args[i]);
    
//     }
//     return arrayUnicos;
// }

// var resultado = onlyUniques('cat', 'dog', 'pig','cat');
// console.log(resultado)

//7

// function combineAllArrays(...args){
//     arrayCombinado=[];
//     for(i=0;i<args.length;i++){
//         arrayCombinado=[...arrayCombinado,...args[i]];

//     }
//     return arrayCombinado;
// }

// var resultado = combineAllArrays([1,2,3,4],['hola','adios'],[true,false]);
// console.log(resultado);

//8

// function squareAndSum(...args){
//     suma = 0;
//     for(i=0;i<args.length;i++){
//         suma+=Math.pow(args[i],2);
//     }
//     return suma;
// }

// var resultado = squareAndSum(2,4,3);
// console.log(resultado);

