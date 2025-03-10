$(document).ready(function(){
    $('#carousel-imgs').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(__) _____-____'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome:',
            telefone: 'Por favor, insira seu telefone:',
            email: 'Por favor, insira seu e-mail:'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.cars-list button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find("h3").text();

        $('#veiculoInteresse').val(nomeVeiculo);
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})