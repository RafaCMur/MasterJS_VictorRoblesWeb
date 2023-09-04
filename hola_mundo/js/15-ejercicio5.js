'use strict'

/*
Muestre todos los numeros divisores de un numero introducido en un prompt
*/

let numero = parseInt(prompt("Introduce un numero mayor a 0", 1));

for (let i = 1; i <= numero/2; i++) {
    if (numero % i == 0) {
        console.log(i)
    }
}

console.log(numero) //El numero puede dividirse por sí mismo