// 16. Faça um script que peça um número inteiro e determine se ele é par ou ímpar.
// Dica: utilize o operador módulo (resto da divisão): %

let num = parseInt(prompt("Digite o número que desejar: "));

if(num%2==0){
    document.write("O número " + num + " é par!");
}else{
    document.write("O número " + num + " é ímpar!");
}