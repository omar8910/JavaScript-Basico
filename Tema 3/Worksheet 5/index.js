//  The Cat

// class Cat{
//     constructor(tiredness,hunger,loneliness,happiness){
//         this.tiredness = tiredness;
//         this.hunger = hunger;
//         this.loneliness = loneliness;
//         this.happiness = happiness;
//     }

//     feed(){
//         this.hunger--;
//         this.happiness++;
//     }

//     sleep(){
//         this.tiredness--;
//         this.happiness++;
//     }

//     pet(){
//         this.loneliness--;
//         this.happiness++;
//     }

//     status(){
//         //Happiness
//         if(this.happiness > 5){
//             console.log("Paws is happy");

//         }else if(this.happiness <= 5 && this.happiness > 0){
//             console.log("Paws is not happy");

//         //Hunger
//         if(this.hunger > 5){
//             console.log("Paws is hungry");
//         }
//         else if(this.hunger <= 5 && this.hunger > 0){
//             console.log("Paws is not hungry");
//         }

//         //Tiredness
//         if(this.tiredness > 5){
//             console.log("Paws is tired");
//         }
//         else if(this.tiredness <= 5 && this.tiredness > 0){
//             console.log("Paws is not tired");
//         }
        
//         //Loneliness
//         if(this.loneliness > 5){
//             console.log("Paws is lonely");
//         }
//         else if(this.loneliness <= 5 && this.loneliness > 0){
//             console.log("Paws is not lonely");
//         }

//     }

// }
// }

// var Fufu = new Cat(5,5,5,5);
// Fufu.status();



// The Reading List

// class Booklist{
//     constructor(){
//         this.readBooks = 0;
//         this.notReadBooks = 0;
//         this.nextBook = -1;
//         this.currentBook = -1;
//         this.lastBook = -1;
//         this.arrayBooks = [];
//     }

//     add(book){
//         this.arrayBooks.push(book);
//         this.notReadBooks++;
//         if(this.currentBook == -1){
//             this.currentBook ++;
//             this.nextBook++;
//         }
//     }

//     finishCurrentBook(){
//         this.arrayBooks[this.currentBook].read = true;
//         this.arrayBooks[this.currentBook].readDate = new Date(Date.now());
//         this.lastBook = this.currentBook;
//         this.currentBook = this.nextBook;
//         this.nextBook = this.nextBook + 1;
//         this.readBooks++;
//         this.notReadBooks--;
//         this.currentBook++;
    
//     }


//     showCurrentBook(){
//         if((this.currentBook == -1)){
//             document.write(`No hay libro actual <br>`);
//         }else{
//         document.write(`El libro actual es: ${this.arrayBooks[this.currentBook].title}  <br>`);
//         }
//     }

//     showNextBook(){
//         if((this.nextBook == -1) || (this.nextBook == this.arrayBooks.length-1)){
//             document.write(`No hay más libros por leer <br>`);
//         }

//         else{
//             document.write(`El siguiente libro es: ${this.arrayBooks[this.nextBook+1].title} <br>`);
//         }

//     }

//     showLastBook(){
//         if(this.lastBook == -1){
//             document.write(`No hay último libro <br>`);
//         }
//         else{
//         document.write(`El último libro es: ${this.arrayBooks[this.lastBook].title} y fue leído en la fecha: ${this.arrayBooks[this.lastBook].readDate} <br>`);
//         }
//     }



// }


// class Book{
//     constructor(title,genre,author){
//         this.title = title;
//         this.genre = genre;
//         this.author = author;
//         this.read = false;
//         this.readDate = null;
//     }
// }

// //Creamos la lista de libros.
// var listaLibros = new Booklist();

// //Creamos los libros.
// var libro1 = new Book("El señor de los anillos","Fantasia","J.R.R. Tolkien");
// var libro2 = new Book("El hobbit","Fantasia","J.R.R. Tolkien");
// var libro3 = new Book("El Silmarillion","Fantasia","J.R.R. Tolkien");
// var libro4 = new Book("El nombre del viento","Fantasia","Patrick Rothfuss");

// //Añadimos los libros a la lista.
// listaLibros.add(libro1);
// listaLibros.add(libro2);
// listaLibros.add(libro3);    
// listaLibros.add(libro4);

// // Metodos
// document.write(`Libros: <br>`);
// for(i=0;i<listaLibros.arrayBooks.length;i++){
//     document.write(`${listaLibros.arrayBooks[i].title} <br>`);
// }
// //Libro 1:
// document.write(`<h3>Libro 1: </h3>`);
// listaLibros.showCurrentBook();
// listaLibros.showNextBook();
// listaLibros.showLastBook(); // No habrá último libro leído hasta que se ejecute el método finishCurrentBook().
// listaLibros.finishCurrentBook();
// document.write(`<br>`);
// //Libro 2:
// document.write(`<h3>Libro 2: </h3>`);
// listaLibros.showCurrentBook();
// listaLibros.showNextBook();
// listaLibros.showLastBook();
// listaLibros.finishCurrentBook();
// document.write(`<br>`);

// //Libro 3:
// document.write(`<h3>Libro 3: </h3>`);
// listaLibros.showCurrentBook();
// listaLibros.showNextBook();
// listaLibros.showLastBook();
// listaLibros.finishCurrentBook();
// document.write(`<br>`);

// //Libro 4:
// document.write(`<h3>Libro 4: </h3>`);
// listaLibros.showCurrentBook();
// listaLibros.showNextBook();
// listaLibros.showLastBook();
// listaLibros.finishCurrentBook();



// The Game (advanced)
