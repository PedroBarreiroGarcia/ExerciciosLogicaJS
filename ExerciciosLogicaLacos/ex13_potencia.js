// 13.	Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem. 

let base = parseInt(prompt("Digite um número para ser elevado: "));
let expoente = parseInt(prompt("Digite o expoente: "));
let resultado=1;

for(i=1;i<=expoente;i++){
    resultado=resultado*base;
}

document.write(resultado);