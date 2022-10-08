// 7. Ler três valores inteiros (variáveis a, b e c) e efetuar o cálculo da equação de segundo
// grau, apresentando: as duas raízes; a  mensagem "Não há raízes reais", se não for possível
// fazer o cálculo (delta negativo); e a mensagem "Não é equação do segundo grau", se o valor
// de "a" for igual a zero.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let a = rs.questionInt("Informe um valor a: ");
let b = rs.questionInt("Informe um valor b: ");
let c = rs.questionInt("Informe um valor c: ");

const delta = b ** 2 - 4 * a * c;
const calcX1 = (-b + Math.sqrt(delta)) / (2 * a);
const calcX2 = (-b - Math.sqrt(delta)) / (2 * a);

if (delta < 0) {
  console.log("Não há raizes reais.");
} else if (delta == 0) {
  console.log("Não é equação do segundo grau.");
} else if (delta > 0) {
  console.log("X¹: " + calcX1);
  console.log("X²: " + calcX2);
}
