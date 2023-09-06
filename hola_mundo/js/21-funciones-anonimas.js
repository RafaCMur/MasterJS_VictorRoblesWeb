'use strict'

// Funciones anonimas
// Es una funcion que no tiene nombre

var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

// Callbacks
// Es una funcion que se ejecuta dentro de otra funcion

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, (dato) =>{
    console.log("La suma es: ", dato);
}, dato => {
    console.log("La suma por dos es: ", (dato*2));
}
);