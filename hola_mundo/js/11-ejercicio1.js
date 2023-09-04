'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir
*/

var num1, num2;

do {
    num1 = parseInt(prompt("Escriba el primer número", 0));
    num2 = parseInt(prompt("Escriba el segundo número", 0));
} while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2));

if (num1 > num2) {
    alert("El número mayor es " + num1 + ", y el menor es " + num2);
} else if (num1 < num2) {
    alert("El número mayor es " + num2 + ", y el menor es " + num1);
} else if (num1 == num2) {
    alert("Los dos números son iguales")
} else {
    alert("INTRODUCE NUMEROS CORRECTOS")
}