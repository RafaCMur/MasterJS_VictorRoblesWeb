$(document).ready(function(){

    // MouseOver y MouseOut
    let caja = $("#caja");

    //caja.mouseover(cambiaRojo())
    //caja.mouseout(cambiaVerde())

    function cambiaRojo(){
        $(this).css("background", "red");
    }

    function cambiaVerde(){
        $(this).css("background", "green");
    }

    // Hover
    caja.hover(cambiaRojo, cambiaVerde); //Lo mismo que mouseover y mouseout

    //Click, Doble click
    caja.click(function(){
        $(this).css("background", "blue")
               .css("color", "white")
    })

    caja.dblclick(function(){
        $(this).css("background", "pink")
               .css("color", "yellow")
    })


    //Focus y blur
    let nombre = $("#nombre")
    let datos = $("#datos")

    nombre.focus(function(){
        $(this).css("border", "2px solid green")
    })

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc")
        datos.text($(this).val()).show(); //Mostrar el valor del input
    })

    //Mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "gray")
    })

    datos.mouseup(function(){
        $(this).css("border-color", "black")
    })

    //Mousemove
    $(document).mousemove((e) => {
        let sigueme = $("#sigueme")
        $('body').css("cursor", "none")
        sigueme.css('left', e.clientX)
               .css('top', e.clientY)
    })
})