// 10.	Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

let numInicio=parseInt(prompt("Digite o número inicial do intervalo: "));
let numFinal=parseInt(prompt("Digite o número final do intervalo: "));

document.write("Número inteiros do intervalo <br> ");
for(i=numInicio+1; i<numFinal;i++){
    document.write(i+"<br>");
}