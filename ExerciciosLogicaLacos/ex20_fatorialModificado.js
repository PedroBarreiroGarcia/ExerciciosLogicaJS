// 20.	Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.

let num;
let fatorial;
let numAux;
let continuar = true;
let validacao;

while (continuar == true) {
    do {
        num = parseInt(prompt("Digite um número entre 1 e 16: "));
    } while (num < 1 || num > 16);
    fatorial = 1;
    numAux = num;

    for (let i = num; i > 0; i--) {
        fatorial = fatorial * num;
        num--;
    }

    document.write("<br>O fatorial de " + numAux + " é: " + fatorial);

    validacao = parseInt(prompt("Deseja inserir outro número?\n1 - Sim\n2 - Não"));

    if (validacao == 1) {
        continuar = true;
    }else {
        continuar = false;
    }
}
