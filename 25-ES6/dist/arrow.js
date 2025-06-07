"use strict";

var minhaFuncao = function minhaFuncao() {
  console.log("Diz olá");
};
minhaFuncao();
var minhaFuncao2 = function minhaFuncao2() {
  return "Diz olá";
};
var minhaFuncao3 = function minhaFuncao3() {
  return "Diz olá";
};
minhaFuncao();
console.log(minhaFuncao2());
minhaFuncao3();
var retornaCarro = function retornaCarro() {
  return {
    modelo: "Corola",
    fabricante: "Toyota"
  };
};
console.log(retornaCarro());