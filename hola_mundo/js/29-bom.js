'use strict'

// BOM - Browser Object Model

function getBom() {
    console.log(window.innerHeight) // Altura de la ventana
    console.log(window.innerWidth) // Anchura de la ventana
    console.log(screen.width) // Anchura de la pantalla
    console.log(screen.height) // Altura de la pantalla
    console.log(window.location) // URL de la página
}

function redirect(url) {
    window.location.href = url
}

function abrirVentana(url) {
    window.open(url, '', 'width=400, height=300')
}

getBom()
