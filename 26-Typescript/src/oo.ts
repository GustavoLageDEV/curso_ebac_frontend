class Pessoa {
    nome:string;
    renda?:number;

    constructor(nome: string, renda?:number) {
        this.nome = nome;
        this.renda = renda
    }

    dizOla():string {
        return `${this.nome} disse oi`;
    }
}

class ContaBancaria {
    protected saldo:number = 0;
    public numeroConta:number;

    constructor( numeroConta:number){
        this.numeroConta = numeroConta
    }

    // Pertence apenas a CLASSE, e nao as instancias.
    static retornaNumeroDoBanco() {
        return 125;
    }

    // Pertence apenas CLASSE
    private getSaldo() {
        return this.saldo
    }

    depositar(valor:number) {
        this.saldo += valor
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo += valor
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456) 

contaDoPedro.depositar(200)
// const saldoAtualPedro = contaDoPedro.getSaldo()

// console.log(saldoAtualPedro)