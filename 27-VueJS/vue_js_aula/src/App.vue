<script setup>

import { reactive } from 'vue';

const nome = 'Gustavo'

const enderecoImagemTigre = "https://www.infoescola.com/wp-content/uploads/2010/06/tigre-de-bengala-60322900.jpg";

const enderecoImagemUrso = "https://cdn.awsli.com.br/600x1000/78/78037/produto/244006696/urso-pardo-safari-ltd-miniatura-animal-moderno-mam-fero--1--u58q0zilcg.jpg";

const botaoEstaHabilitado = false;
const botaoEstaDesabilitado = true;

const gostaDeTigre = false;
const gostaDeUrso = true;

const estado = reactive({
  contador: 0,
  email: "",
  saldo: 5000,
  transferindo: 0,
  nomes: ['samara', 'davi','fabio', 'gabriel'],
  nomeAInserir: ''
})

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function alteraEmail(evento) {
  estado.email = evento.target.value
}

function mostraSaldoFuturo() {
  const {saldo, transferindo} = estado
  return saldo - transferindo
}

function validaValorTransferencia() {
  const {saldo, transferindo} = estado
  return saldo >= transferindo
}

function cadastrarNome() {
  if (estado.nomeAInserir.length >= 3) {
    estado.nomes.push(estado.nomeAInserir)
  } else {
    alert("Digite mais caracteres")
  }
}

</script>

<template>
  <h1>{{nome}}</h1>
  <!-- v-if='false' nem RENDERIZA -->
  <img v-if="gostaDeTigre" v-bind:src="enderecoImagemTigre" alt="">
  <img v-else-if="gostaDeUrso" :src="enderecoImagemUrso" alt="">
  <h2 v-else>Não curte animais selvagens</h2>

  <!-- v-show:'false' display = none -->
  <img v-show="false" :src="enderecoImagemUrso" alt="">

  <button :disabled="!botaoEstaHabilitado">Enviar mensagem</button>
  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>

  <br>
  <hr>

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferencia: {{ mostraSaldoFuturo() }} <br>
  <input :class="{ invalido: !validaValorTransferencia()}" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">

  <br>
  <hr>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastrarNome" type="button">Cadastrar nome</button>

  <h3 v-for="nome in estado.nomes">
    {{ nome }}
  </h3>
</template>



<style scoped>

  .invalido {
    outline-color: red;
    border-color: red;
  }

</style>
