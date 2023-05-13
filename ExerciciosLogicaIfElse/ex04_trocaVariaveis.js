// 4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
let num1 = parseInt(prompt("Entre com o primeiro número: "));
let num2 = parseInt(prompt("Entre com o segundo número: "));
let auxiliar = num1;

num1=num2;
num2=auxiliar;

alert ("O primeiro número era "+ auxiliar + " agora é " + num1 + "\n" + "O segundo número era "+ num1 + " agora é " + num2);