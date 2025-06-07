const redesSociais = ['facebook', 'instagram', 'twitter']

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

// forEach nao retorna, apenas itera
redesSociais.forEach(function(nomeDaREdeSocial, indice) {
    console.log(`${indice} - Eu tenho perfil na rede social: ${nomeDaREdeSocial}`)
})

const alunos = ["Gustavo", "Julia", "Jorge", "Wagner"];

const alunos2 = alunos.map(function(item) {
    item = {
        nome: item,
        curso: "Front-end"
    }

    return item
})

console.log(alunos2)

const julia = alunos2.find(function(item) {
    return item.nome == "Julia"
})

console.log(julia)

const indexJulia = alunos2.findIndex(function(item) {
    return item.nome == "Julia"
})

console.log(indexJulia)

alunos2.push({
    nome: "Olga",
    curso: 'QA'
})

const todosAlunosFront = alunos2.every(function(item) {
    return item.curso === 'Front-end'
})

console.log(todosAlunosFront)
console.log(alunos2)


const nums = [10,20,30,40]

const soma = nums.reduce(function(result,num) {
    result += num;
    return result;
},0)

console.log(soma)