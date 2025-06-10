type aluno = {
    nome: string;
    cursos?: string[];
    idade: number
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["FrontEnd", "BackEnd", "QA"],
        idade: 27
    },
    {
        nome: "Andre",
        cursos: ["FrontEnd", "Python", "UI/UX"],
        idade: 23
    },
]

alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 21
})

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 18,
}

function exibeAluno(aluno: aluno) {
    console.log (aluno.nome)
}

exibeAluno(alunos[1])