// 4. Implemente um pseudocódigo que leia um número inteiro até que o usuário digite um valor
// negativo. Imprima o maior número digitado.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let contador = 0;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
do {
  contador++;
  numero = rs.questionInt("Digite um número: ");
} while (numero > 0);
console.log("O número total de tentativas foi: " + contador);
