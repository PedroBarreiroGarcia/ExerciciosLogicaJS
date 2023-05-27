// 45.	Faça um programa que peça um numero inteiro positivo e em seguida mostre este numero invertido.
// Exemplo:
//  12376489
//  => 98467321
let num = prompt("Digite um número inteiro positivo:");
let numInvertido = "";

for (let i = num.length - 1; i >= 0; i--) {
    numInvertido += num[i];
}

document.write("O número inserido foi "+num+" e o número invertido é "+numInvertido);
