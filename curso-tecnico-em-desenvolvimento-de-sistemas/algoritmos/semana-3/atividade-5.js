// 5. A prefeitura do Rio de Janeiro abriu uma linha de crédito para os funcionários
// estatutários. O valor máximo da prestação não poderá ultrapassar 30% do salário bruto.
// Fazer um algoritmo que permita entrar com o salário bruto e o valor da prestação e informar
// se o empréstimo pode ou não ser concedido.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let salarioBruto = rs.questionInt("Informe o valor do salário bruto R$: ");
let valorPrestacao = rs.questionInt("Informe o valor da prestação R$: ");

let linhaDeCreditoAprovado = salarioBruto * 0.3;

if (valorPrestacao <= linhaDeCreditoAprovado) {
  console.log("Empréstimo Aprovado!");
} else {
  console.log("Empréstimo Negado!");
}
