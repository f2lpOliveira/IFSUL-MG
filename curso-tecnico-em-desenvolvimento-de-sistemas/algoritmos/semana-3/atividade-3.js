// 3. Ler um número inteiro e imprimir seu sucessor e seu antecessor.

let rs = require('readline-sync');

let x = rs.questionInt('Informe o valor de x: ');

// ---------------------- Resposta ----------------------

let y = x + 1;
let z = x - 1;

console.log(y);
console.log(z);
