// 3. Faça um pseudocódigo que receba a idade de 5 pessoas que calcule e mostre a quantidade
// de pessoas com idade maior ou igual a 18 anos.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let maiorDeIdade = 0;
let quantidadeDePessoas = 5;

for (i = 0; i < quantidadeDePessoas; i++) {
  let idadePessoa = rs.questionInt("Informe a idade da pessoa " + (i + 1) + ": ");
  if (idadePessoa >= 18) {
    maiorDeIdade++;
  }
}
console.log("O número de pessoas maior de idade é: " + maiorDeIdade);
