'use strict'

// LocalStorage

// Comprobar disponibilidad del LocalStorage

if(typeof(Storage) !== 'undefined') {
    console.log('LocalStorage disponible')
} else {
    console.log('Incompatible: LocalStorage incompatible')
}


// Guardar datos
localStorage.setItem('Key', 'Curso de Symfony de Victor Robles')


// Recuperar elemento
document.querySelector('#peliculas').innerHTML = localStorage.getItem('Key')


// Guardar objetos
let usuario = {
    nombre: 'Victor Robles',
    email: 'victor@victor.es',
    web: 'victorroblesweb.es'
}

localStorage.setItem('usuario', JSON.stringify(usuario))


// Recuperar objeto
let userjs = JSON.parse(localStorage.getItem('usuario'))
console.log(userjs)
//Create a new div element
let div = document.createElement('div')
//Add text to the div
div.append(' ' + userjs.email + ' - ' + userjs.web)


// Borrar elemento
localStorage.removeItem('usuario')
localStorage.clear() // Borra todo el localStorage
