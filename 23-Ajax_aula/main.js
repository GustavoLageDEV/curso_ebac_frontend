// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-buscar-cep').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint)
//         xhttp.send();


//         // https://viacep.com.br/ws/123123/json
//     })
// })

// mesmo código com JQuery

$(document).ready(function() {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);

        // this = #btn-buscar-cep, ou seja, o elemento do evento
        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')

        // $.ajax(endpoint).done(function(resposta) {

        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.uf;
        //     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        //     $('#endereco').val(endereco);

        //     $(botao).find('i').removeClass('d-none');
        //     $(botao).find('span').addClass('d-none');

        // })

        fetch(endpoint).then(function(resposta) {
            return resposta.json()
        })
        .then(function(json) { // Já funciona como um Try
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
        })
        .catch(function(erro) {
            alert('Ocorreu um erro ao buscar o seu endereço, tente novamente mais tarde')
        })
        .finally(function() {
            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
        }) 
    })

    $('#formulario-pedido').submit( function(evento) {
        evento.preventDefault();

        if ($('#nome').val().length  == 0) {
            throw new Error('Digite o seu nome');
        }
    })
})