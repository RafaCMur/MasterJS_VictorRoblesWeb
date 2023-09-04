'use strict'

//Pruebas con let y var

//Prueba con var
var numero = 40;

console.log(numero); //valor 40

if(true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con let
var texto = "Curso JS Victorroblesweb.es"
console.log(texto); //valor JS

if (true) {
    let texto = "Curso Laravel 5 Victorroblesweb.es"
    console.log(texto); //valor Laravel
}

console.log(texto); //valor JS