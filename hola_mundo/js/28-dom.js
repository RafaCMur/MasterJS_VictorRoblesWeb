'use strict'

// DOM - Document Object Model

function cambiaColor(color) {
    caja.style.background = color
}

//var caja = document.getElementById('micaja')
var caja = document.querySelector('#micaja')

caja.innerHTML = 'Texto desde JS'
caja.style.background = 'black'
caja.style.padding = '20px'
caja.style.color = 'white'
caja.className = 'hola'


// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div')

//var contenidoEnTexto = todosLosDivs[2] //Referencia al div 2
//contenidoEnTexto.innerHTML = 'Otro texto para el segundo elemento'

var seccion = document.querySelector('#miseccion')
let hr = document.createElement('hr')

for (let index in todosLosDivs) {
    if (typeof todosLosDivs[index].textContent === 'string') {
        var parrafo = document.createElement('p')
        var texto = document.createTextNode(todosLosDivs[index].textContent)
        parrafo.append(texto)
        seccion.append(parrafo)
    }
}

seccion.append(hr)

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo')
var divsAmarillos = document.getElementsByClassName('amarillo')
divsAmarillos[0].style.background = 'yellow'

for (let i in divsRojos) {
    if (divsRojos[i].className == 'rojo') {
        divsRojos[i].style.background = 'red'
    }
}


// Query Selector
let id = document.querySelector('#encabezado')
console.log(id)

let claseRojo = document.querySelector('.rojo')
console.log(claseRojo)

let etiqueta = document.querySelector('div')
console.log(etiqueta)