class Nota {
    constructor(titulo, contenido) {
        this.notaID = id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha = Date.now();
    }
}

class listaNotas{
    constructor(){
        this.arrayNotas = [];      
    }
    
    añadirNota(ID, titulo, contenido){
        const nota = new Nota(ID, titulo, contenido);
        this.arrayNotas.push(nota);
    }

    eliminarNota(ID){
        this.arrayNotas = this.arrayNotas.filter(nota => nota.notaID !== ID);
    }

    modificarNota(ID, titulo, contenido){
        this.arrayNotas.forEach(nota => {
            if(nota.notaID === ID){
                nota.titulo = titulo;
                nota.contenido = contenido;
            }
        });
    }
}