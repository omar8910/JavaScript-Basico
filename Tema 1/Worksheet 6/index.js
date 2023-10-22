//4.10
// var texto = "Cabecera h";
// for(i=1;i<=6;i++){
//     document.write(`<h${i}>Cabecera h${i}</h${i}><br>`);     
// }




//4.12 / 4.11

// var columnas = parseInt(prompt("Introduzca el número de columnas: "));
// var alto = parseInt(prompt("Introduzca el alto: "));
// var ancho = parseInt(prompt("Introduzca el ancho: "));

// document.write(`<table border = "0" cellspacing = "2" bgcolor = "black" width = "200">`);
// document.write(`<tr bgcolor = "white" height = "50" >`);
// for(i=0;i<columnas;i++){
//     if(i%2!=0){
//     document.write(`<td width = "${alto*ancho}" bgcolor="black"> &nbsp;</td>`);
//     }
//     else{
//     document.write(`<td width = "${alto*ancho}" bgcolor="white"> &nbsp;</td>`);
//     }
// }
// document.write(`</tr`);
// document.write(`</table`);

//4.13 / 4.14

// var columnas = parseInt(prompt("Introduzca el número de columnas: "));
// var alto = parseInt(prompt("Introduzca el alto: "));
// var ancho = parseInt(prompt("Introduzca el ancho: "));
// var contador = 0;

// document.write(`<table border = "0" cellspacing = "2" bgcolor = "black" width = "200">`);
// document.write(`<tr bgcolor = "white" height = "50" >`);
// while(contador!=columnas){
//     if(contador%2!=0){
//     document.write(`<td width = "${alto*ancho}" bgcolor="black"> &nbsp;</td>`);
//     }
//     else{
//     document.write(`<td width = "${alto*ancho}" bgcolor="white"> &nbsp;</td>`);
//     }
//     contador++;
// }
// document.write(`</tr`);
// document.write(`</table`);


// 4.15

// var num_adivinar = parseInt(prompt("Introduzca un número a adivinar: "));
// var num = parseInt(prompt("Introduzca un número para adivinar: "));

// while(num!=num_adivinar){
//     if(num>num_adivinar){
//         alert("El número es mayor que el mágico");
//     }
//     else if(num<num_adivinar){
//         alert("El número es menor al mágico");
//     }
// num = parseInt(prompt("Introduzca un número para adivinar: "));
// }
// document.write("Has acertado");


// 4.16

// var num_adivinar = parseInt(prompt("Introduzca un número a adivinar: "));
// var num = parseInt(prompt("Introduzca un número para adivinar: "));

// do{
//     if(num>num_adivinar){
//         alert("El número es mayor que el mágico");
//     }
//     else if(num<num_adivinar){
//         alert("El número es menor al mágico");
//     }
// num = parseInt(prompt("Introduzca un número para adivinar: "));
// }while(num!=num_adivinar);
// document.write("Has acertado");

// 4.17

// for(x=1;x<=10;x++){
//     document.write(`<h2>Tabla del ${x}:</h2>`);
//     for(y=0;y<=10;y++){
//         document.write(`${x} x ${y} = ${x*y}<br>`);
//     }
// }

// 4.18

// var columnas = parseInt(prompt("Introduzca el número de columnas: "));
// var filas = parseInt(prompt("Introduzca el número de filas: "));
// var alto = parseInt(prompt("Introduzca la altura en pixels: "));
// var ancho = parseInt(prompt("Introduzca el ancho en pixels: "));

// document.write(`<table border = "0" cellspacing = "2" bgcolor = "black" width = "${ancho}">`);
// for(j=1;j<=columnas;j++){
//     document.write(`<tr bgcolor = "white" height = "${alto}">`);
//         for(i=1;i<=filas;i++){
//             document.write(`<td width = "${ancho}"> &nbsp;</td>`);
//         }
//     document.write(`</tr>`);
// }
// document.write(`</table>`);

// 4.19

var ancho = parseInt(prompt("Introduzca el ancho: "));


document.write(`<table border = "0" cellspacing = "2" bgcolor = "black" width = "${ancho*ancho}}">`);
for(j=0;j<8;j++){
    if(j%2==0){
        document.write(`<tr height = "${ancho}">`);
    }
    else{
        document.write(`<tr height = "${ancho}">`);
    }
    for(i=0;i<8;i++){ // i = columnas; j = filas.
        //Si la columna es par
        if(i%2==0){
            // Y la fila es par -> blanco
            if(j%2==0){
                document.write(`<td bgcolor="white" width = "${ancho}"> &nbsp;</td>`);
            }// Y la fila es impar -> negro
            else{
                document.write(`<td bgcolor="black" width = "${ancho}"> &nbsp;</td>`);
            }
        }
        //Si la columna es impar
        else{
            //Y la fila es par -> negro
            if(j%2==0){
                document.write(`<td bgcolor="black" width = "${ancho}"> &nbsp;</td>`);
            }// Y la fila es impar -> blanco.
            else{
                document.write(`<td bgcolor="white" width = "${ancho}"> &nbsp;</td>`);
            }
        }
        }
    document.write(`</tr>`);
 }
 document.write(`</table>`);



