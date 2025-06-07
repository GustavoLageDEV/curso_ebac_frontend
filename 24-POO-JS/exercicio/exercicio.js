function Animal(nome,idade,raca) {
    this.nome = nome;
    this.idade = idade;

    let _raca = raca

    this.falar = function() {
        console.log("...")
    }

    this.getRaca = function() {
        return _raca
    }
}

function Cachorro(nome,idade) {
    Animal.call(this,nome,idade,'Cachorro')

    this.falar = function() {
        const raca = this.getRaca()
        console.log(`${nome} (${raca}): AUAU!`)
    }
}

function Gato(nome,idade) {
    Animal.call(this,nome,idade,'Gato')

    this.falar = function() {
        console.log(`${nome} (${this.getRaca()}): MIAU!`)
    }
}

const animal1 = new Cachorro('Bartolomeu',12)
const animal2 = new Gato('Garfield',25)
const animal3 = new Cachorro('Capitao',3)

animal1.falar()
animal2.falar()
animal3.falar()