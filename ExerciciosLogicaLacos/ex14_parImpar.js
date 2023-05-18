// 14.	Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.
let num;
let quantPar=0;
let quantImpar=0;

for(i=1;i<=10;i++){
    num=parseInt(prompt("Digite um número: "));
    if(num%2!=0){
        quantImpar++;
    }else{
        quantPar++;
    }
}

document.write("A quantidade de número pares é de: "+quantPar+"<br> A quantidade de números ímpares é de: "+quantImpar)