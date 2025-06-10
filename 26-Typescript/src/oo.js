"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    // Pertence apenas a CLASSE, e nao as instancias.
    static retornaNumeroDoBanco() {
        return 125;
    }
    // Pertence apenas CLASSE
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo += valor;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
contaDoPedro.depositar(200);
// const saldoAtualPedro = contaDoPedro.getSaldo()
// console.log(saldoAtualPedro)
