// 2. Implemente um pseudocódigo para ler o salário de um funcionário e aumentá-lo em 15%. Após o aumento, desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento e o salário final.

let rs = require('readline-sync');

let x = rs.questionFloat('Informe seu salário R$: ');

// ---------------------- Resposta ----------------------

let valorAjustado = x + x * 0.15;
let valorDescontado = valorAjustado - valorAjustado * 0.08;

console.log('R$' + x.toFixed(2));
console.log('R$' + valorAjustado.toFixed(2));
console.log('R$' + valorDescontado.toFixed(2));
