// 1.	Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

let nota=parseFloat(prompt("Digite uma nota de 0 a 10:"));

while (nota>10 || nota<0){
    alert("Valor Inválido! Insira um valor válido entre 0 e 10!");
    nota=parseFloat(prompt("Digite uma nota de 0 a 10:"));
}

document.write("A nota inserida é de: "+nota.toFixed(2));