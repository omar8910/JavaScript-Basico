class Book{
    constructor(tit, aut, gen)
    {
        this.title = tit;
        this.genre = gen;
        this.author = aut;
        this.read = false;
        this.readDate = null;
    }
}

class BookList{
    constructor()
    {
        this.books = [];
        this.currentBook = 0;
    }

    add(book)
    {
        this.books.push(book);
    }

    finishCurrentBook()
    {
        if (this.currentBook<this.books.length)
        {
            this.books[this.currentBook].read=true;
            this.books[this.currentBook].readDate = new Date();
            this.currentBook++;

        }

    }

    get numberBooksRead()
    {
        return this.books.filter( (book)=> book.read).length;
    }

    get numberBooksNotReadYet()
    {
        return this.books.length - this.numberBooksRead;
    }

    get totalBooks(){
        return this.books.length;
    }

}


window.onload = function(){
    var myBookList = new BookList();

    document.querySelector("button").addEventListener("click",()=>{
        var titulo = document.getElementById("titulo").value;
        var genero = document.getElementById("genero").value;
        var autor = document.getElementById("autor").value;
        myBookList.add(new Book(titulo,autor,genero));

        mostrarListaLibros(myBookList);
    });

    document.getElementById("listaLectura").addEventListener("click",()=>{
        myBookList.finishCurrentBook();
        mostrarListaLibros(myBookList);
    });

    function mostrarListaLibros(lista){
        document.getElementById("listaLectura").innerHTML = "";
        lista.books.forEach((libro)=>{
            var libroLeido;

            if(!libro.read){
                libroLeido = "No leido";
            }
            else{
                libroLeido = "Leido";
            }

            libroAñadido = `<li>Titulo: ${libro.title} <br> Autor: ${libro.author} <br> Genero: ${libro.genre} <br> Estado: ${libroLeido} <br> Fecha de lectura: ${libro.readDate} </li>`;
                
            document.getElementById("listaLectura").innerHTML += libroAñadido;





        });

        document.getElementById("contadorLibros").innerHTML = `${lista.numberBooksRead} of ${lista.totalBooks}`;

    }

};