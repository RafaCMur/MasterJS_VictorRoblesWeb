
$(document).ready(function () {

    $('form input[name="date"]').datepicker({
        dateFormat: 'dd-mm-yy',
    })

    // Validación de formulario
    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    })
})
