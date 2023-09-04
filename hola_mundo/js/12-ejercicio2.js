'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador = 0;
var numIntro;

do {
    numIntro = Number(prompt("Introduce un numero para acumular, y un numero (-) para terminar", 0));
    if (isNaN(numIntro)) {
        numIntro = 0; //No hacer nada
    } else if (numIntro >= 0) {
        suma += numIntro;
        contador++;
    }
    console.log(suma);
    console.log(contador);
} while (numIntro >= 0);

alert ("El resultado de la suma es: " + suma + "\nLa media aritmética es: " + suma/contador);