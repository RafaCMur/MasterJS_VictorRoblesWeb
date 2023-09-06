$(document).ready(function() {


    // Load
    //$('#datos').load('https://reqres.in/')

    // .done(() => {
    //     alert('Usuario añadido correctamente')
    // })
    // Get y Post
    $.get("https://reqres.in/api/users?page=2", {page:3 }, response => {
        response.data.map((elem, index) => {
            $('#datos').append("<p>" + elem.first_name + " " + elem.last_name + "</p>")
        })
    })

    //Post: Para postear datos en la web
    $('#formulario').submit(function (e) {
        e.preventDefault()

        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        }
        
        // $.post($(this).attr('action'), usuario, function (response) {
        //     console.log(response)
        // })

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function () {
                console.log('Enviando usuario...');
            },
            success: function (response) {
                console.log(response);
            },
            error: function () {
                console.log('Ha ocurrido un error');
            },
            timeout: 1000
        })

        return false
    })

})
