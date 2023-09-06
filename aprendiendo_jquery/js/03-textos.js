$(document).ready(function(){

    let btn = $('#add_button')
    let inpt = $('#add_link')
    let menu = $('#menu')

    reloadLinks()

    btn.click(function(){
        menu.append('<li><a href="' + inpt.val() + '"></a></li>')
        reloadLinks()
    })
})

function reloadLinks () {
    console.log($('a').length)
    $('a').each(function(){
        let that = $(this)
        let enlace = $(this).attr('href')
        that.attr('target', '_blank')
        that.text(enlace)
    })
}
