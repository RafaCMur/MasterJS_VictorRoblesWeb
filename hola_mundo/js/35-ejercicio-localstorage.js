'use strict'

let formulario = document.querySelector('#formpeliculas')
let divPelis = document.querySelector('#peliculas')

formulario.addEventListener('submit', () => {

    let titulo = document.querySelector('#addpelicula').value

    if (titulo.trim().length > 0) {
        localStorage.setItem(titulo, titulo)
    }
})

let ul = document.createElement('ul')
for (let i in localStorage) {
    if (typeof localStorage[i] == 'string') {
        let li = document.createElement('li')
        li.append(localStorage[i])
        ul.append(li)
    }
}
ul.append(document.querySelector('#divPelis'))
divPelis.append(ul)

let formulariob = document.querySelector('#formBorrarPeliculas')

formulariob.addEventListener('submit', () => {

    let titulo = document.querySelector('#borrarPelicula').value

    if (titulo.trim().length > 0) {
        localStorage.removeItem(titulo)
    }
})
