'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array ("PHP", "JS", "GO", "Java", "C#", "C", "Pascal");

// console.log(nombres[2]);
// console.log(lenguajes.length);

//Poniendo el numero del indice del elemento del array,sacar su valor. Hacerlo con un prompt

// var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
// if(0 <= elemento < nombres.length){ //Si el numero introducido es mayor o igual que el numero de elementos del array
//     alert("Introduce el numero correcto menor que " + nombres.length + " y mayor o igual que 0");
// }else{
//     alert("El usuario seleccionado es: " + nombres[elemento]);
// }

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

// for (var i = 0; i < lenguajes.length; i++) {
//     document.write("<li>" + lenguajes[i] + "</li>");
// }

// lenguajes.forEach((elemento, indice) => {
//     document.write("<li>" + indice + " - " + elemento + "</li>");
// })

for (let index in lenguajes) {
    document.write("<li>" + lenguajes[index] + "</li>");
}

document.write("</ul>");

//Busquedas

var precios = [10, 20, 50, 80, 12];

// let busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP"); //find o findIndex
// let busqueda = precios.some(precio => precio > 10);
let busqueda = precios.every(precio => precio > 10);
console.log(busqueda);
