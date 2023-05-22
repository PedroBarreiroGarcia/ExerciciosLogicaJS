// 37.	Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
// a.	Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// b.	Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// c.	A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. Faça um programa que determine o salário atual desse funcionário. Após concluir isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário.

let anoAtual= parseInt(prompt("Digite o ano atual: "));
let salario= 1000;
let percentual= 1.5 / 100;
let i= 1997;
let novoSalario=salario + percentual * salario;

while (i <= anoAtual) {
  percentual = 2 * percentual;
  novoSalario = novoSalario + percentual * novoSalario;
  i = i + 1;
}

document.write("Novo salário = " + novoSalario.toFixed(2));
