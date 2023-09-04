'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

let num1 = parseInt(prompt("Introduzca el primer número", 0));
let num2 = parseInt(prompt("Introduzca el segundo número", 0));

document.write("<h1>De " + num1 + " a " + num2 + " están estos números:</h1>")
for (let i = num1 + 1; i > num1 && i < num2; i++) {
    document.write(i + "<br/>")
}