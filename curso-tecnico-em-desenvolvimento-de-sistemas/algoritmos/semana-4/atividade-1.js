// 1. Um supermercado resolveu calcular a média de valores de seus produtos, sabendo que
// este supermercado possui 5 produtos, faça um pseudocódigo que calcule esta média.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let produtosCadastrados = 5;
let somaValorProdutos = 0;
let media = 0;

for (i = 0; i < produtosCadastrados; i++) {
  valorProduto = rs.questionFloat("Digite o valor do produto " + (i + 1) + ": ");
  somaValorProdutos = somaValorProdutos + valorProduto;
}

media = somaValorProdutos / produtosCadastrados;
console.log(media);
