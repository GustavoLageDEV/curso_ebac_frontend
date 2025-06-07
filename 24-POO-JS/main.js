const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,

    acelerar: function() {
        console.log('Vrum');
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao:2020,

    acelerar: function() {
        console.log('Vrum');
    }
}

// Forma antiga de criar classes, segundo GPT
function Carro(modelo,fabricante,anoModelo,anoFabricacao) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao

    this.acelerar = function() {
        console.log('acelerar')
    }
}

const carroDoJoao2 = new Carro( 'Fiesta','Ford', 2020, 2019);
const carroDaMaria2 = new Carro( 'Ka','Ford', 2021, 2020);

console.log(carroDoJoao2)
console.log(carroDaMaria2)

const nome = 'gustavo';
const idade = 27;
const isMaiorDeIdade = true;
const conhecimentos = ["hmtl","Python","SQL"]

const pessoa = {
    nome: nome,
    idade: idade,
    isMaiorDeIdade: isMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof isMaiorDeIdade)
console.log(typeof conhecimentos)
console.log(typeof pessoa)

console.log(conhecimentos instanceof Array)
console.log(conhecimentos instanceof Carro)
console.log(carroDaMaria2 instanceof Carro)

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log('Nome dos atributos: ', Object.keys(pessoa))
console.log('Quantidade de atrivutos: ',Object.keys(pessoa).length)
console.log('Valor dos atributos: ',Object.values(pessoa))
