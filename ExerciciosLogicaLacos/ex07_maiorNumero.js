// 7.	Faça um programa que leia 5 números e informe o maior número.

let num;
let maior=0;

for(i=1;i<=5;i++){
    num=parseFloat(prompt("Digite um número: "));
    if (num>maior){
        maior=num;
    }
}

document.write("O maior número inserido é o: "+maior);