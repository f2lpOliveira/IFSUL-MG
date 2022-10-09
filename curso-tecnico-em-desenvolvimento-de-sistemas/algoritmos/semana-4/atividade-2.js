// 2. Uma loja tem 5 clientes cadastrados e deseja enviar uma correspondência a cada um
// deles anunciando um bônus especial. Faça um programa que leia o código do cliente e o valor
// de suas compras no ano passado. Calcule e mostre um bônus de 10% se o valor das compras for
// menor que R$1.000,00 e de 15%, caso contrário.

let rs = require("readline-sync");

// ---------------------- Resposta ----------------------

let clientesCadastrados = 5;
let valorLimite = 1000;
let percentualMinimo = 0.1;
let percentualMaximo = 0.15;

for (i = 1; i <= clientesCadastrados; i++) {
  let codigoDoCliente = rs.questionInt("Digite o código do cliente: ");
  let valorGasto = rs.questionFloat("Informe o total gasto no ano: R$");

  if (valorGasto <= valorLimite && valorGasto > 0) {
    console.log("O cliente receberá um bônus de: R$" + valorGasto * percentualMinimo);
  } else {
    console.log(
      "O cliente " + codigoDoCliente + " receberá um bônus de: R$" + valorGasto * percentualMaximo
    );
  }
}
