// 1. Um supermercado resolveu calcular a média de valores de seus produtos, sabendo que
// este supermercado possui 5 produtos, faça um pseudocódigo que calcule esta média.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let item1 = rs.questionFloat("Digite o valor do item 1: ");
let item2 = rs.questionFloat("Digite o valor do item 2: ");
let item3 = rs.questionFloat("Digite o valor do item 3: ");
let item4 = rs.questionFloat("Digite o valor do item 4: ");
let item5 = rs.questionFloat("Digite o valor do item 5: ");

let media = (item1 + item2 + item3 + item4 + item5) / 5;

console.log("O valor médio dos produtos é: R$" + media.toFixed(2));
