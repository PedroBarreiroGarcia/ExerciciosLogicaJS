// 22.	Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível.

let num = parseInt(prompt("Digite um número: "));
let divisores = [];

for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
        // inserir a variável i dentro do Array
        divisores.push(i);
  }
}

if (divisores.length == 1) { 
    //o length é uma função que verifica a quantidade de elementos dentro do Array
    document.write("O número " + num + " é primo");
} else {
    document.write("O número " + num + " não é primo. É divisível por: " + divisores.join(", "));
    //o join é uma função que "puxa" todos os elementos do vetor combinando como uma string
}