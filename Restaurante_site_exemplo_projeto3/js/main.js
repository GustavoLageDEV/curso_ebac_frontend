$(document).ready(function(){
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
})