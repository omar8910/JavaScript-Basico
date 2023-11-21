class Vista{

    interfazPaginaPrincipal(){
     
    }

    vistaSimple(idDiv, arrayNotas){
        document.getElementById(idDiv).innerHTML = "";
        
        ul = document.createElement("ul");
        
        for(let nota of arrayNotas){
            li = document.createElement("li");
            li.innerHTML = nota.titulo;
            ul.appendChild(li);
        }

        document.getElementById(idDiv).appendChild(ul);

    }



    vistaCompleja(){

    }


}