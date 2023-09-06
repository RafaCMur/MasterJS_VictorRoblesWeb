$(document).ready(function(){

    // Efectos
    let caja = $('#caja')
    let ocultar = $('#ocultar')
    let mostrar = $('#mostrar')

    $('#mostrar').click(() => {
        mostrar.hide()
        ocultar.show()
        caja.fadeTo('slow', 1)
    })

    $('#ocultar').click(() => {
        ocultar.hide()
        mostrar.show()
        caja.fadeTo('slow', 0, () => {
            console.log('Cartel ocultado')
        })
    })

    $('#todoenuno').click(() => {
        caja.slideToggle('fast')
    })

    $('#animar').click(() => {
        caja.animate({
                        marginLeft: '500px',
                        height: '110',
                        fontSize: '40px'
        }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, 'slow')
            .animate({
                        marginLeft: '500px',
                        height: '110',
                        fontSize: '40px'
            }, 'slow')
    })
})
