'use strict'

// Transformación de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de curso Victor Robles";
var texto2 = "Es muy buen curso";

// Funciones de búsqueda
var busqueda = texto1.indexOf("curso"); // Busca la palabra curso en el texto1
console.log(busqueda);

var busqueda = texto1.lastIndexOf("curso"); // Busca la ultima palabra curso en el texto1
console.log(busqueda);

var busqueda = texto1.search("curso"); // Busca la palabra curso en el texto1
console.log(busqueda);

var busqueda = texto1.match("curso"); // Busca la palabra curso en el texto1
console.log(busqueda);

var busqueda = texto1.match(/curso/g); // Busca la palabra curso en el texto1
console.log(busqueda);

var busqueda = texto1.substring(14, 5); // Sacame a partir del caracter 14 los 5 siguientes, es decir, "curso"
console.log(busqueda);

var busqueda = texto1.charAt(44); // Busca el caracter en la posicion 44
console.log(busqueda);

var busqueda = texto1.startsWith("Bienvenido"); // Busca si el texto1 empieza por Bienvenido
console.log(busqueda);

var busqueda = texto1.endsWith("Robles"); // Busca si el texto1 termina por Robles
console.log(busqueda);

var busqueda = texto1.includes("JavaScript"); // Busca si el texto1 incluye la palabra JavaScript
console.log(busqueda);

// Funciones de reemplazo
var busqueda = texto1.replace("JavaScript", "Symfony"); // Reemplaza la palabra JavaScript por Symfony
console.log(busqueda);

var busqueda = texto1.slice(14, 22); // Corta el texto desde la posicion 14 hasta la 22
console.log(busqueda);

var busqueda = texto1.split(" "); // Separa el texto1 por espacios y lo mete en un array
console.log(busqueda);

let texto3 = "Bienvenido al curso de JavaScript de curso Victor Robles";
var busqueda = texto3.trim(); // Quita los espacios por delante y por detras
console.log(busqueda);
