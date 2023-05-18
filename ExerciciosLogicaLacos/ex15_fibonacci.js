// 15.	A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

let n = parseInt(prompt("Digite a quantidade de termos que deseja ver: "));
let a = 1;
let b = 1;
let aux = 0;

document.write(a+", ");
document.write(b+", ");

for (let i = 3; i <= n; i++) {
    aux = a + b;
    a = b;
    b = aux;
    document.write(aux+", ");
}

