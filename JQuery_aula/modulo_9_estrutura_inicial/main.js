$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#cancel-button'))

    document.querySelector('header button').addEventListener('click', function(e){

    })

    $('header button').click(function(){
        alert("Exepandir formulário")
    })

    $('form').on('submit',function(e){
        e.preventDefault();
    })
})