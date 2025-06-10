const nomes = ["Gustavo", "Julia", "Jorge", "Wagner","Luan"];
const notas = [5,6,2,7,9]

const alunos = nomes.map((nome, i) => {
    return { 
        nome: nome, 
        nota: notas[i] 
    };
});

const alunosAprovados = alunos.filter(function(item) {

    return item.nota >= 6;
})

console.log("\nTodos alunos:  \n")
alunos.forEach(function(aluno){
    console.log(`Aluno: ${aluno.nome} Nota: ${aluno.nota}`)
})

console.log("\nAlunos Aprovados: \n")
alunosAprovados.forEach(function(aluno) {
    console.log(`Aluno: ${aluno.nome}`)
})