// 17.	Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120

let num=parseInt(prompt("Digite o número que deseja ver o fatorial: "));
let fatorial=1;
let numAux=num;
for(i=num;i>0;i--){
    fatorial=fatorial*num;
    num--;
}

document.write("O fatorial de "+numAux+" é: "+fatorial);
