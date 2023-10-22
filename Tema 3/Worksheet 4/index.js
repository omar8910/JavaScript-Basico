window.onload = function(){
//Puzzle
class Puzzle{
    // Guardamos la fila y la columna del espacio en blanco.
    espacioBlancoColumna; // espacioBlancoColumna == i
    espacioBlancoFila; // espacioBlancoFila== j
    dimensiones; // Dimensiones del tablero.
    tablero; // Tablero.
    solucion; // Solución del tablero.
    
    //Creamos el constructor.
    constructor(dimensiones){
        this.tablero = this.crearTablero(dimensiones);
        this.dimensiones = dimensiones;
        this.espacioBlancoFila = dimensiones-1;
        this.espacioBlancoColumna = dimensiones-1;
        this.solucion = JSON.parse(JSON.stringify(this.tablero));
        this.barajarTablero();
        this.comprobarSolucion();
        
    }

    //Creamos el tablero.   
    crearTablero(dimensiones){
        var tablero = [];
        for(var i = 0; i<dimensiones;i++){
            tablero[i] = [];
            for(var j =0; j<dimensiones;j++){
                tablero[i][j] = (i*dimensiones)+j+1;
            }
        }
        tablero[dimensiones-1][dimensiones-1] = " ";
        return tablero;
    }

    //Dibujamos la solución del tablero.
    
    dibujarTablero(){ 
        //Accedemos al elemento tablero del html.
        const getTablero = document.getElementById("tablero");

        //Limpiamos el tablero.
        getTablero.innerHTML = '';

        //Creamos el tablero.
        for(let i=0;i<this.dimensiones;i++){
            const tr = document.createElement("tr"); //Creamos la fila del tablero.
            for(let j=0;j<this.dimensiones;j++){
                const td = document.createElement("td"); //Creamos la columna del tablero.
                td.textContent = this.tablero[i][j]; //Añadimos el contenido de la columna.
                tr.appendChild(td); //Añadimos la columna a la fila.
            }
            getTablero.appendChild(tr); //Añadimos la fila al tablero.
        }
    }

        //Barajamos el tablero.
        barajarTablero(){
            for(var i = 0; i<30;i++){
                var movimientos = ["arriba","abajo","izquierda","derecha"];
                var movimiento = movimientos[Math.floor(Math.random()*movimientos.length)];
                this.moverEspacioBlanco(movimiento);
            }
        }

        // Comprueba si el movimiento es válido.
    comprobarMovimiento(movimiento){
        switch(movimiento){
            case "arriba":
                if(this.espacioBlancoFila == 0){
                    return false;
                }
                break;
            case "abajo":
                if(this.espacioBlancoFila == this.dimensiones-1){
                    return false;
                }
                break;
            case "izquierda":
                if(this.espacioBlancoColumna == 0){
                    return false;
                }
                break;
            case "derecha":
                if(this.espacioBlancoColumna == this.dimensiones-1){
                    return false;
                }
                break;
        }
        return true;
    }
    

    //Movemos el espacio en blanco anteriormente validado.
    moverEspacioBlanco(movimiento){
        if(this.comprobarMovimiento(movimiento)){
            switch(movimiento){
                case "arriba":
                    this.tablero[this.espacioBlancoFila][this.espacioBlancoColumna] = this.tablero[this.espacioBlancoFila-1][this.espacioBlancoColumna];
                    this.tablero[this.espacioBlancoFila-1][this.espacioBlancoColumna] = " ";
                    this.espacioBlancoFila--;
                    break;
                case "abajo":
                    this.tablero[this.espacioBlancoFila][this.espacioBlancoColumna] = this.tablero[this.espacioBlancoFila+1][this.espacioBlancoColumna];
                    this.tablero[this.espacioBlancoFila+1][this.espacioBlancoColumna] = " ";
                    this.espacioBlancoFila++;
                    break;
                case "izquierda":
                    this.tablero[this.espacioBlancoFila][this.espacioBlancoColumna] = this.tablero[this.espacioBlancoFila][this.espacioBlancoColumna-1];
                    this.tablero[this.espacioBlancoFila][this.espacioBlancoColumna-1] = " ";
                    this.espacioBlancoColumna--;
                    break;
                case "derecha":
                    this.tablero[this.espacioBlancoFila][this.espacioBlancoColumna] = this.tablero[this.espacioBlancoFila][this.espacioBlancoColumna+1];
                    this.tablero[this.espacioBlancoFila][this.espacioBlancoColumna+1] = " ";
                    this.espacioBlancoColumna++;
                    break;
        }
        this.dibujarTablero();
        if(this.comprobarSolucion()){
            console.log("Has ganado!");
        }
    
    }
    }

    
    //Comprobamos si el tablero actual es igual al tablero solución.
    comprobarSolucion(){
        for(var i = 0; i<this.dimensiones;i++){
            for(var j =0; j<this.dimensiones;j++){
                if(this.tablero[i][j] != this.solucion[i][j]){
                    return false;
                }
            }
        }
        return true;
    }


}
//Creamos el puzzle
tablero = new Puzzle(2);

}






