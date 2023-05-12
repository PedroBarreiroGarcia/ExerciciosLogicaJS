// 20. Faça um script que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:

//     par ou ímpar;
//     positivo ou negativo;
//     inteiro ou decimal.

let num1 = parseFloat(prompt("Digite primeiro número: "));
let num2 = parseFloat(prompt("Digite segundo número: "));
let operacao = prompt ("Digite qual operação deseja fazer: \n + (para soma) \n - (para subtração)\n * (para multiplicação)\n  / (para divisão)");
let resultado=0;
let parImpar;
let positivoNegativo;
let inteiroDecimal;

switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
  }

if(resultado%2!=0){
    parImpar=(" ímpar, ");
}else{
    parImpar=(" par, ");
}

if (resultado>0){
    positivoNegativo=(" positivo, ");
}else{
    positivoNegativo=(" negativo, ");
}

if(Math.trunc(resultado)==resultado){
    inteiroDecimal=(" e é inteiro.");
}else{
    inteiroDecimal=(" e é decimal. ");
}

document.write("A operação do numero "+num1+" e do número "+num2+ " apresenta resultado de "+resultado+ " sendo o numero "+parImpar+positivoNegativo+inteiroDecimal);