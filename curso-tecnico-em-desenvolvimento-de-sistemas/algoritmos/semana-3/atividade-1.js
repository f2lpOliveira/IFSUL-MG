// 1. Implemente um pseucódigo que leia um número e informe se esse número é multipĺo de 5 ou não.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let x = rs.questionInt("Informe o valor de x: ");

if (x % 5 == 0) {
  console.log(x + " é múltiplo de 5.");
} else {
  console.log(x + " não é múltiplo de 5.");
}
