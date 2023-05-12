// 18. Faça um script para um caixa eletrônico. O script deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O script não deve se preocupar com a quantidade de notas existentes na máquina.


// 1.	 Exemplo: Para sacar a quantia de 256 reais, o script fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
// 2.	 Exemplo: Para sacar a quantia de 399 reais, o script fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.

let valorSaque = parseInt( prompt("Digite o valor que desejar sacar: "));
let valorSaqueAux= valorSaque;
let notasCem=0 ;
let notasCinquenta=0;
let notasDez=0;
let notasCinco=0;
let notasUm=0;


if (valorSaque >= 100) {
    notasCem = Math.floor(valorSaque / 100);
    valorSaque = valorSaque % 100;
  }
  if (valorSaque >= 50) {
    notasCinquenta = Math.floor(valorSaque / 50);
    valorSaque = valorSaque % 50;
  }
  if (valorSaque >= 10) {
    notasDez = Math.floor(valorSaque / 10);
    valorSaque = valorSaque % 10;
  }
  if (valorSaque >= 5) {
    notasCinco = Math.floor(valorSaque / 5);
    valorSaque = valorSaque % 5;
  }
  if (valorSaque >= 1) {
    notasUm = valorSaque;
  }

  document.write("Para sacar a quantia de " +valorSaqueAux+ " reais, o script fornece:<br>");

    if (notasCem > 0) {
        document.write(notasCem + " nota(s) de R$100<br>");
    }
    if (notasCinquenta > 0) {
        document.write(notasCinquenta + " nota(s) de R$50<br>");
    }
    if (notasDez > 0) {
        document.write(notasDez + " nota(s) de R$10<br>");
    }
    if (notasCinco > 0) {
        document.write(notasCinco + " nota(s) de R$5<br>");
    }
    if (notasUm > 0) {
        document.write(notasUm + " nota(s) de R$1<br>");
    }
      