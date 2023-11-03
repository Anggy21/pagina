//alert("Hola este es mi Javascript");

let nombre = "Anggy";

console.log(nombre);

//Seleccionar elementos 
/*let contenidoTitulo = "otra cosa";

let titulo = document.querySelector("#titulo");

titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;

console.log(textoTitulo);

if (textoTitulo == "nombre") {
    titulo.innerHTML = "otro"
}else{
    titulo.innerHTML = "No se cumple"
}

let nombre2 = "Anggy";
let age = 20;
let animal = "gato";

let contenido = document.querySelector(".parrafo2");

function cambiarDatos(name, age, animal){
    let parrafo = `Hola mi nombre es ${name} y tengo ${age} años, mi animal favorito es el ${animal} voluptatum dignissimos corrupti placeat nemo magnam cumque expedita id odio. Reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt error sequi, ipsa, earum amet quasi facilis eius consequuntur, voluptatum dignissimos corrupti placeat nemo magnam cumque expedita id odio. Reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sunt error sequi, ipsa, earum amet quasi facilis eius consequuntur, voluptatum dignissimos corrupti placeat nemo magnam cumque expedita id odio. Reiciendis`;

    return parrafo;
};

contenido.innerHTML = cambiarDatos(nombre2, age, animal);*/

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};