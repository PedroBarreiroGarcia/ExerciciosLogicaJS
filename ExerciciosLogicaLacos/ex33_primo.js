// 33.	Os números primos possuem várias aplicações dentro da Computação, por exemplo na Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.

let num = parseInt(prompt("Digite um número: "));
let primo = 0;

for (let i = 2; i <= num; i++) {
  if (num % i == 0) {
    primo++;
  }
}

if (primo == 1) {
  document.write("O número " + num + " é primo");
} else {
  document.write("O número " + num + " não é primo");
}
