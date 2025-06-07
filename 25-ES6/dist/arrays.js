"use strict";

var redesSociais = ['facebook', 'instagram', 'twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

// forEach nao retorna, apenas itera
redesSociais.forEach(function (nomeDaREdeSocial, indice) {
  console.log("".concat(indice, " - Eu tenho perfil na rede social: ").concat(nomeDaREdeSocial));
});
var alunos = ["Gustavo", "Julia", "Jorge", "Wagner"];
var alunos2 = alunos.map(function (item) {
  item = {
    nome: item,
    curso: "Front-end"
  };
  return item;
});
console.log(alunos2);
var julia = alunos2.find(function (item) {
  return item.nome == "Julia";
});
console.log(julia);
var indexJulia = alunos2.findIndex(function (item) {
  return item.nome == "Julia";
});
console.log(indexJulia);
alunos2.push({
  nome: "Olga",
  curso: 'QA'
});
var todosAlunosFront = alunos2.every(function (item) {
  return item.curso === 'Front-end';
});
console.log(todosAlunosFront);
console.log(alunos2);
var nums = [10, 20, 30, 40];
var soma = nums.reduce(function (result, num) {
  result += num;
  return result;
}, 0);
console.log(soma);