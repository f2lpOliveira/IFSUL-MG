// 4. Entrar com a base e a altura de um retângulo e imprimir a seguinte saída:
//   perímetro: ____
//   área: ____
//   diagonal: _____
// Para resolver esse problema, pesquise a fórmula do perímetro, área e diagonal de um retângulo.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let base = rs.questionInt("Informe o valor de base do retângulo: ");
let altura = rs.questionInt("Informe o valor de altura do retângulo: ");

const perimetro = 2 * (base + altura);
const area = base * altura;

// Nota: A função Math.sqrt() retorna a raiz quadrada de um número.

const diagonal = Math.sqrt(base ** 2 + altura ** 2).toFixed(3);

console.log("Perímetro: " + perimetro);
console.log("Área: " + area);
console.log("Diagonal: " + diagonal);
