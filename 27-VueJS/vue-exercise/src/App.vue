<script setup>
import { reactive } from 'vue';

const estado = reactive({
  operacao: 'soma',
  num1: 0,
  num2: 0
})


const realizaOperacao = function(num1,num2) {
  const {operacao} = estado;

  switch (operacao) {
    case 'subtracao':
      return `O resultado da subtração é: ${Number(estado.num1) - Number(estado.num2)}`;
    case 'multiplicacao':
      return `O resultado da multiplicação é: ${Number(estado.num1) * Number(estado.num2)}`;
    case 'divisao':
      return `O resultado da divisão é: ${Number(estado.num1) / Number(estado.num2)}`;
    default:
      return `O resultado da soma é: ${Number(estado.num1) + Number(estado.num2)}`;
  }
}

</script>

<template>
  <div class="container text-center">
    <h1 class="mt-3 mb-3">Calculadora Aritmética</h1>
    <h2>Escolha sua operação:  </h2>
    <form >
      <div class="row mt-3 mb-3">
        <div class="col-4 mx-auto">
          <select @change="evento => estado.operacao = evento.target.value" class="form-control">
            <option value="soma">Soma</option>
            <option value="subtracao">Subtração</option>
            <option value="multiplicacao">Multiplicação</option>
            <option value="divisao">Divisão</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-2">
          <input @change="evento => estado.num1 = evento.target.value" type="number" placeholder="Primeiro número">
        </div>
        <div class="col-2">
          <input @change="evento => estado.num2 = evento.target.value" type="number" placeholder="Segundo número">
        </div>
      </div>
      <div class="row justify-content-center mt-3 mb-3" id="resultado">
          <div>
            {{realizaOperacao()}} 
          </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>
