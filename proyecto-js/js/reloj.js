
$('document').ready(function () {

    var reloj;

    $('#reloj').html(reloj)
    setInterval(function () {

        reloj = moment().format('HH:mm:ss')
        $('#reloj').html(reloj)

    }, 1000)
    
})
