'use strict'

$(document).ready(function(){  //Selector del document

    //Selector de ID
    let rojo = $('#rojo').css('background','red')
                         .css('color','white')
    
    let amarillo = $('#amarillo').css('background','yellow')
                                 .css('color','green')

    let verde = $('#verde').css('background','green')
                        .css('color','white');
    
    //Selector de clase
    let miclase = $('.zebra').css('padding','5px')

    $('.sin_borde').click(function(){
        console.log('Click dado!!')
        $(this).addClass('zebra')
    });


    //Selectores de etiqueta
    let parrafos = $('p').css('cursor','pointer')
    parrafos.click(event => {
        let e = $(event.currentTarget)
        if (!e.hasClass('grande')) {
            e.addClass('grande')
        } else {
            e.removeClass('grande')
        }
    })

    //Selectores de atributo
    $('[title="Google"]').css('background','#ccc')  //Gris claro
    $('[title="Facebook"]').css('background','lightblue')

    //Otros
    //$('p, a').addClass('margen-superior')
    
    let busqueda = $('#elemento2').parent().parent().find('.resaltado')
    console.log(busqueda)
})
