

console.log('Clase js')

let bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiaColor: function (nuevo_color) {
        this.color = nuevo_color
    }
}

bicicleta.cambiaColor('Azul')
