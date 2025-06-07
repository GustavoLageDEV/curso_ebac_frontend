function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá');
    }

}

function Funcionario(nome,cargo,salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    this.getSalario = function() {
        return _salario
    } 

    this.setSalario = function(novoSalario) {
        if( typeof novoSalario === 'number') {
            _salario = novoSalario
        } else {
            console.log('Valor nao é numerico!')
        }
        
    }

    this.aumento = function() {
        console.log(`Sálario antigo: ${this.getSalario()}`)
        const novoSalario = this.getSalario() * 1.1;
        this.setSalario(novoSalario);
        console.log(`Sálario após aumento de 10%: ${this.getSalario()}`);
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, 'Estagiário',2000)

    this.aumento = function() {
    console.log(`Sálario antigo: ${this.getSalario()}`)
    const novoSalario = this.getSalario() * 1.07;
    this.setSalario(novoSalario);
    console.log(`Sálario após aumento de 7%: ${this.getSalario()}`)
    }
}

const funcionario1 = new Funcionario('Theo','Back-end Dev',8000);
const funcionario2 = new Estagiario('Jorge');

funcionario1.aumento()

funcionario2.aumento()

console.log(typeof new Error())