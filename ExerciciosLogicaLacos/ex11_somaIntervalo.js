// 11.	Altere o programa anterior para mostrar no final a soma dos números.
let numInicio=parseInt(prompt("Digite o número inicial do intervalo: "));
let numFinal=parseInt(prompt("Digite o número final do intervalo: "));
let soma=0;

document.write("Número inteiros do intervalo <br> ");
for(i=numInicio+1; i<numFinal;i++){
    document.write(i+"<br>");
    soma=soma+i;
}

document.write("A soma dos números mostrados é: "+soma);