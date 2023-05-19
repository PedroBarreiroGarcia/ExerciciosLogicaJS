// 18.	Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.
let quantNum = parseInt(prompt("Digite quantos números deseja inserir: "));
let num;
let maior;
let menor;
let soma = 0;

for (let i = 1; i <= quantNum; i++) {
  num = parseInt(prompt("Digite um número: "));

  if (i === 1) {
    maior = num;
    menor = num;
  } else {
    if (num > maior) {
      maior = num;
    }
    if (num < menor) {
      menor = num;
    }
  }

  soma += num;
}

document.write("Dentre os " + quantNum + " números inseridos, o menor é o " + menor + ", o maior é o " + maior + " e a soma de todos os números é " + soma);

