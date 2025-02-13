const form = document.getElementById("form-deposit");
const nomeBenficiario = document.getElementById("nome-beneficiario");
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2
}

form.addEventListener("submit",function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `O montante de: <b>R$${valorDeposito.value}</b> depositado para o cliente <b>${nomeBenficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`

    formEValido = validaNome(nomeBenficiario.value)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.mensagemSucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBenficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''
    } else{
        nomeBenficiario.style.border = '1px solid red'
        document.querySelector('.mensagemErro').style.display = 'block';
    }

})

nomeBenficiario.addEventListener('keyup',function(e){

    console.log(e.target.value)
    formEValido = validaNome(e.target.value)

    if (!formEValido){
        nomeBenficiario.classList.add('error');
        document.querySelector('.mensagemErro').style.display = 'block';
    } else{
        nomeBenficiario.classList.remove('error');
        document.querySelector('.mensagemErro').style.display = 'none';
    }
})
