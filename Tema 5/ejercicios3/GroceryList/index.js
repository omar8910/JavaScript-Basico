function addProduct(){
    let productText = document.getElementById("productText");
    let groceryList = document.getElementById("grocery-list");
    let newProduct = document.createElement("div"); // Creamos un div para el producto.
    newProduct.className = "newProduct"; // Con el nombre de "newProduct"

    let nameProduct = document.createElement("span");
    nameProduct.className = "nameProduct";
    nameProduct.textContent = productText.value;

    let divImgs = document.createElement("div"); //Creamos un div dentro del div "newProduct" para las imagenes.
    divImgs.className = "divImgs";

    let imgEdit = document.createElement("img"); // Primera imagen, la de editar.
    imgEdit.id = "imgEdit";
    imgEdit.src = "./editar.png";

    let imgTrash = document.createElement("img"); // Segunda imagen, la de la papelera.
    imgTrash.id = "imgTrash";
    imgTrash.src = "./papelera.png";

    divImgs.appendChild(imgEdit); // Añadimos la imagen de editar al div "divImgs".
    divImgs.appendChild(imgTrash); // Añadimos la imagen de la papelera al div "divImgs".

    newProduct.appendChild(nameProduct); // Añadimos el nombre del producto al div "newProduct".
    newProduct.appendChild(divImgs); // Añadimos el div de las imagenes al div "newProduct".
    groceryList.appendChild(newProduct); // Añadimos el div "newProduct" a la lista de la compra.

    imgEdit.addEventListener("click", ()=>{editProduct(nameProduct)}); // Añadimos el evento de editar al boton de editar.
    imgTrash.addEventListener("click", ()=>{deleteProduct(newProduct)}); // Añadimos el evento de borrar al boton de borrar.

    productText.value = ""; // Limpiamos el input.
    arrayProducts.push(nameProduct.textContent); // Añadimos el producto al array.
    localStorage.setItem("arrayProducts", JSON.stringify(arrayProducts)); // Guardamos el array en el localStorage.
}

function editProduct(e){
    let renameProduct = prompt("Introduzca el nuevo nombre del producto: ");
    e.textContent = renameProduct; 
}

function deleteProduct(e){
    e.remove();
}

function deleteAllProducts(list){
    list.innerHTML = "";
    localStorage.clear();
}

window.onload = () =>{
    arrayProducts = [];

    let addProductButton = document.getElementById("grocery-button");
    addProductButton.addEventListener("click", (e) =>{
        e.preventDefault(); // Para que no se envíe el formulario y se recargue la página.
        addProduct();
    })

    let deleteAllProductsButton = document.getElementById("grocery-clear");
    let groceryList = document.getElementById("grocery-list");
    deleteAllProductsButton.addEventListener("click", () =>{
        deleteAllProducts(groceryList);
    })

    if(localStorage.getItem("arrayProducts")){
        for(product of JSON.parse(arrayProducts)){
            let productName = document.getElementById("productText");
            let groceryList = document.getElementById("grocery-list");
            let newProduct = document.createElement("div"); // Creamos un div para el producto.
            newProduct.className = "newProduct"; // Con el nombre de "newProduct"

            let nameProduct = document.createElement("span");
            nameProduct.className = "nameProduct";
            nameProduct.textContent = productName;

            let divImgs = document.createElement("div"); //Creamos un div dentro del div "newProduct" para las imagenes.
            divImgs.className = "divImgs";

            let imgEdit = document.createElement("img"); // Primera imagen, la de editar.
            imgEdit.id = "imgEdit";
            imgEdit.src = "./editar.png";

            let imgTrash = document.createElement("img"); // Segunda imagen, la de la papelera.
            imgTrash.id = "imgTrash";
            imgTrash.src = "./papelera.png";

            divImgs.appendChild(imgEdit); // Añadimos la imagen de editar al div "divImgs".
            divImgs.appendChild(imgTrash); // Añadimos la imagen de la papelera al div "divImgs".

            newProduct.appendChild(nameProduct); // Añadimos el nombre del producto al div "newProduct".
            newProduct.appendChild(divImgs); // Añadimos el div de las imagenes al div "newProduct".
            groceryList.appendChild(newProduct); // Añadimos el div "newProduct" a la lista de la compra.

            imgEdit.addEventListener("click", ()=>{editProduct(nameText)}); // Añadimos el evento de editar al boton de editar.
            imgTrash.addEventListener("click", ()=>{(deleteProduct(newProduct))}); // Añadimos el evento de borrar al boton de borrar.

            arrayProducts.push(nameProduct.textContent); // Añadimos el producto al array.
        }

    }
}