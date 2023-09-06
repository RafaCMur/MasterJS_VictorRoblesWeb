$(document).ready(function(){
    let liSeleccionable = $('.lista-seleccionable')
    //Mover elemento por la pagina
    $('.elemento').draggable()

    // Redimensionar
    $('.elemento').resizable()

    // Seleccionar elementos
    //liSeleccionable.selectable ()

    // Reordenar elementos de la lista dragging them
    liSeleccionable.sortable ({
        update: function (event, ui) {
            console.log("Ha cambiado la lista");
        }
    })

    $('#elemento-movido').draggable()
    
    $('#area').droppable({
        drop: function() {
            console.log('Has soltado algo dentro de la pantalla')
        }
    })


    // Efectos
    $('#mostrar').click(function () {
        $('.caja-efectos').toggle('fade')
    })

    //Tooltip
    $(document).tooltip()

    //Dialog
    $('#lanzar-popup').click(function () {
        $('#popup').dialog()
    })

    //Datepicker
    $('#calendario').datepicker()

    //Tabs
    $('#pestanas').tabs()
})
