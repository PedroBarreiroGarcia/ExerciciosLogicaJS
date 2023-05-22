// 34.	Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro informado pelo usuário.
let numFinal = parseInt(prompt("Digite o número final do intervalo: "));
let primos = [];

for (let num = 2; num <= numFinal; num++) {
    let divisores = 0;
  
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisores++;
      }
    }
  
    if (divisores === 2) {
      primos.push(num);
    }
  }

document.write("Os números primos entre 1 e " + numFinal + " são: " + primos.join(", ") + "<br>");
