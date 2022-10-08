// 4. Implemente um pseudocódigo que leia um número inteiro até que o usuário digite um valor
// negativo. Imprima o maior número digitado.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let numero = rs.questionInt("Digite um número: ");
let contador = 0;

while (numero > 0) {
  contador++;
  numero = rs.questionInt("Digite um número: ");
}
console.log("O número total de tentativas foi: " + contador);
