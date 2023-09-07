
$(document).ready(function () {

    $(function () {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true,
        })
    })

    // Posts
    let posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie massa sed felis rutrum tempor. Maecenas tempor, velit vel ultrices aliquet, nisl nisi tincidunt nisl, eget gravida libero risus et erat. Maecenas condimentum nisl ac urna rhoncus, vel molestie metus sagittis. Donec tincidunt felis vel ante convallis, in fermentum justo dignissim. Mauris molestie massa in tempor imperdiet. Mauris rutrum in arcu at vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Prueba de titulo 2',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie massa sed felis rutrum tempor. Maecenas tempor, velit vel ultrices aliquet, nisl nisi tincidunt nisl, eget gravida libero risus et erat. Maecenas condimentum nisl ac urna rhoncus, vel molestie metus sagittis. Donec tincidunt felis vel ante convallis, in fermentum justo dignissim. Mauris molestie massa in tempor imperdiet. Mauris rutrum in arcu at vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Prueba de titulo 3',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie massa sed felis rutrum tempor. Maecenas tempor, velit vel ultrices aliquet, nisl nisi tincidunt nisl, eget gravida libero risus et erat. Maecenas condimentum nisl ac urna rhoncus, vel molestie metus sagittis. Donec tincidunt felis vel ante convallis, in fermentum justo dignissim. Mauris molestie massa in tempor imperdiet. Mauris rutrum in arcu at vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Prueba de titulo 4',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie massa sed felis rutrum tempor. Maecenas tempor, velit vel ultrices aliquet, nisl nisi tincidunt nisl, eget gravida libero risus et erat. Maecenas condimentum nisl ac urna rhoncus, vel molestie metus sagittis. Donec tincidunt felis vel ante convallis, in fermentum justo dignissim. Mauris molestie massa in tempor imperdiet. Mauris rutrum in arcu at vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ]


    posts.map((item, index) => {
        let post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a  href="#" class="button-more">Leer más</a>
            </article>
        `

        $('#posts').append(post)
    })

    
    //Selector de tema
    let theme = $('#theme')
    $('#to-green').click(function () {
        theme.attr('href', 'css/green.css')
    })
    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css')
    })
    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css')
    })
})
