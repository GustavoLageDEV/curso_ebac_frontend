const form = document.getElementById('questions')

function isBGreaterThanA(numA,numB) {
    return numB > numA
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    const numA = document.getElementById('numA');
    const numB = document.getElementById('numB');

    const feedback = document.querySelector('.feedback');
    feedback.c
    const goodMessage = `Muito bem. <br>Número  B: ${numB.value} é maior que o Número A: ${numA.value}.`;
    const badMessage = `Isso não é nada bom. <br>Número  B: ${numB.value} é menor que o Número A: ${numA.value}.`;

    if (isBGreaterThanA(numA.value, numB.value)){
        feedback.innerHTML = goodMessage;
        feedback.style.backgroundColor = '#009619';
    } else {
        feedback.innerHTML = badMessage;
        feedback.style.backgroundColor = '#960000';
    }
    feedback.style.display = "block"
    numA.value = ''
    numB.value = ''
})