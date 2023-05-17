// 8.	Faça um programa que leia 5 números e informe a soma e a média dos números. 
let num;
let soma=0;
let media=0;

for(i=1;i<=5;i++){
    num=parseFloat(prompt("Digite um número: "));
    soma=soma+num;
}
media=soma/5;
document.write("A soma dos cinco números é: "+soma+ " e a média é de: "+media.toFixed(2));