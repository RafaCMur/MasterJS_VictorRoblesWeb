'use strict'

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("Introduce un numero", 1));

document.write("<h1>Tabla del " + numero + "</h1>")

for (let i = 1; i <= 10; i++){
    document.write(numero + ' x ' + i + ' es: ' + numero*i + '<br/>')
}

//Todas las tablas de multiplicar hasta la del 10

// for (let c = 1; c <= 10; c++) {
//     document.write("<h1>Tabla del " + c + "</h1>")

//     for (let i = 1; i <= 10; i++) {
//         document.write(c + ' x ' + i + ' = ' + c * i + '<br/>')
//     }
// }