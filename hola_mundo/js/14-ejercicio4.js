'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

let num1 = parseInt(prompt("Introduzca el primer número", 0));
let num2 = parseInt(prompt("Introduzca el segundo número", 0));

document.write("<h1>De " + num1 + " a " + num2 + " están estos números impares:</h1>")

//Comprobar si num1 es par
let impar = num1;
if (impar % 2 == 0) {
    impar++; //Si es par, mirar cual es el siguiente numero impar
}

for (let i = impar; i >= num1 && i <= num2; i = i+2) {
    document.write(i + "<br/>")
}