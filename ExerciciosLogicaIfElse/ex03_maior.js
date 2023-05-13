// 3. Faça um script que leia três números inteiros e mostre o maior deles.
let num1 = parseInt(prompt("Entre com o primeiro número: "));
let num2 = parseInt(prompt("Entre com o segundo número: "));
let num3 = parseInt(prompt("Entre com o terceiro número: "));

if (num1>num2 && num1>num3){
    document.write("O maior número é o: " + num1);
} else if (num2>num1 && num2>num3){
    document.write("O maior número é o: " + num2);
}else if (num3>num1 && num3>num2){
    document.write("O maior número é o: " + num3);
}