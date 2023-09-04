'use strict'

// Arrays multidimensionales
var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

// Ordenar un array por orden alfabético (el array original se modifica)
console.log(peliculas.sort());

// Dar la vuelta a un array (el array original se modifica)
console.log(peliculas.reverse());

var cine = [categorias, peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);


// do {
//     var elemento = prompt("Introduce tu película:");
//     peliculas.push(elemento);
// } while(elemento != "ACABAR");

peliculas.pop();

// peliculas.push("Batman");
let indice = peliculas.indexOf("Gran torino");
if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join("; ");

let cadena = "texto1, texto2, texto3";
let cadena_array = cadena.split(", ");
