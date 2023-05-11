// 12. Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo.
// Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

// Dicas:
// Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;

let lado1 = prompt("Digite o valor do primeiro lado do triângulo: ");
let lado2 = prompt("Digite o valor do segundo lado do triângulo: ");
let lado3 = prompt("Digite o valor do terceiro lado do triângulo: ");

if (lado1+lado2>lado3 || lado1+lado3>lado2 || lado3+lado2>lado1 ){
    if (lado1==lado2 && lado2==lado3 && lado1==lado3){
        document.write("O triângulo é Equilátero!")
    } else if ((lado1==lado2 && lado2==lado1 &&  lado1!=lado3 && lado2!=lado3) || (lado1==lado3 && lado1!=lado2 && lado3!=lado2)|| (lado2==lado3 && lado1!=lado3 && lado1!=lado2)){
        document.write("O triângulo é Isóceles!")
    }else if (lado1!=lado2 && lado1!=lado3 && lado2!=lado3){
        document.write("O triângulo é Escaleno!")
    }
}