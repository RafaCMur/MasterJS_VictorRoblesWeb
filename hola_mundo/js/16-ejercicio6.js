'use strict'

/*
Que nos diga si un numero es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

let number = parseInt(prompt("Introduzca un numero", 0));

while (isNaN(number)) {
    number = parseInt(prompt("Error, vuelva a introducir un numero", 0));
}

let alerta = number % 2 == 0 ? 'Es par' : 'Es impar';
alert(alerta)