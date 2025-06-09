// COnstrutor da classe

class Pokemon {
    #hp = 100;
    // nome = '';
    // tipo = '';

    constructor(nomeDoPokemon,tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

const pikachu = new Pokemon('Pikachu',"Elétrico");

// pikachu.atacar('choque do trovão')
// pikachu.nome = 'Pikachu';
// pikachu.tipo = "Elétrico";

console.log(pikachu)

// Herança:

class Pikachu extends Pokemon {
    // nome = 'Pikachu';
    // tipo = 'Elétrico';

    constructor() {
        super('Pikachu', 'Elétrico')
    }
    atacar() {
        console.log(`${this.nome} atacou com Choque do Trovão`)
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();

// console.log(pikachuDoAsh.hp)
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp()

console.log(pikachuDoAsh);