'use strict'

/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de
  sumar, restar, multiplicar y dividir esas dos cifras
*/

let num1, num2;

do {
    num1 = Number(prompt("Introduzca el primer número", 0))
    num2 = Number(prompt("Introduzca el segundo número", 0))
} while (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0)

let resultados = 'Suma: ' + (num1 + num2) + '</br>'
                + 'Resta: ' + (num1 - num2) + '</br>'
                + 'Multiplicación: ' + (num1 * num2) + '</br>'
                + 'División: ' + (num1 / num2) + '</br>'
    
let resultadoCMD = 'Suma: ' + (num1 + num2) + '\n'
                + 'Resta: ' + (num1 - num2) + '\n'
                + 'Multiplicación: ' + (num1 * num2) + '\n'
                + 'División: ' + (num1 / num2) + '\n'

document.write(resultados)
alert(resultadoCMD)
console.log(resultadoCMD)
