'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
*/

let numeros = []

while (numeros.length < 6) {
    let input = prompt('Introduzca un número')
    let numero = parseInt(input)

    if (isNaN(numero)) {
        alert('Debe introducir un número válido')
    } else {
        numeros.push(numero)
    }
}

const mostrar = (numeros, modo = '') => {
    document.write('<h1>Contenido del array ' + modo + '</h1>')
    document.write('<ul>')
    numeros.forEach(num => {
        document.write('<strong>' + num + '</strong><br/>')
        console.log(num)
    })
    document.write('</ul>')
}

const tamano = (numeros) => {
    document.write('<h1>El array tiene ' + numeros.length + ' elementos</h1>')
}

//mostrar(numeros)
mostrar(numeros.sort(), 'ordenado')
//mostrar(mostrar(numeros.sort((a, b) => a - b), 'invertido'))
tamano(numeros)


// Busquedas
var busqueda = parseInt(prompt('Busca un número', 0))
document.write('<h1>Busqueda del número ' + busqueda + '</h1>')
var posicion = numeros.findIndex(num => num == busqueda)

if (posicion > -1 && posicion < numeros.length) {
    document.write('<hr/><h1>Encontrado</h1>')
    document.write('<h1>Posición de la búsqueda: ' + posicion + '</h1><hr/>')
} else {
    document.write('<hr/><h1>No encontrado</h1><hr/>')
}
