// 39.	Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes dados: valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.
// Os juros e a quantidade de parcelas seguem a tabela abaixo:
// a.	Quantidade de Parcelas  % de Juros sobre o valor inicial da dívida
// 1       0
// 3       10
// 6       15
// 9       20
// 12      25
// Exemplo de saída do programa:
// Valor da Dívida Valor dos Juros Quantidade de Parcelas  Valor da Parcela
// R$ 1.000,00     0               1                       R$  1.000,00
// R$ 1.100,00     100             3                       R$    366,00
// R$ 1.150,00     150             6                       R$    191,67
let valorInicial;
let quantParcelas;
let cont = 0;
let valorJuros;
let valorComJuros;
let valorParcela;

while (cont == 0) {
  valorInicial = parseFloat(prompt("Digite o valor inicial da dívida: "));
  quantParcelas = parseInt(prompt("Digite a quantidade de parcelas para pagar a dívida. As opções são: 1, 3, 6, 9 ou 12"));

  if (quantParcelas == 1) {
    valorJuros = 0;
  } else if (quantParcelas == 3) {
    valorJuros = 0.1;
  } else if (quantParcelas == 6) {
    valorJuros = 0.15;
  } else if (quantParcelas == 9) {
    valorJuros = 0.2;
  } else if (quantParcelas == 12) {
    valorJuros = 0.25;
  }

  valorComJuros = valorInicial + (valorInicial * valorJuros);
  valorJuros = valorInicial * valorJuros;
  valorParcela = valorComJuros / quantParcelas;

  cont = parseInt(prompt("Deseja digitar outra dívida?\n 0 - sim\n 1 - não")); 
}

alert("Valor da Dívida  Valor dos Juros  Quantidade de Parcelas  Valor da Parcela\nR$   " + valorComJuros.toFixed(2) + "          " + valorJuros.toFixed(2) + "          " + quantParcelas + "          R$ " + valorParcela.toFixed(2) + "     ");

