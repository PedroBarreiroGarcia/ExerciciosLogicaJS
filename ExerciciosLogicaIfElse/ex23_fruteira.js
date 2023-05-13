// 23. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//                           Até 5 Kg                 Acima de 5 Kg
//     Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
//     Maçã              R$ 1,80 por Kg          R$ 1,50 por Kg

//     Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

let quantMorango = parseFloat(prompt("Digite quantos kg de morango deseja comprar? "));
let quantMaca = parseFloat(prompt("Digite quantos kg de maçã deseja comprar? "));
let quantTotal;
let valorMorango;
let valorMaca;
let valorTotal;

if (quantMorango<=5){
    valorMorango=quantMorango*2.5;
}else{
    valorMorango=quantMorango*2.2;
}

if (quantMaca<=5){
    valorMaca=quantMaca*1.8;
}else{
    valorMaca=quantMaca*1.5;
}

valorTotal=valorMorango+valorMaca;
quantTotal=quantMorango+quantMaca;
if(valorTotal>25 || quantTotal>8){
    valorTotal=valorTotal*.9;
}

document.write("O valor total é de: R$ "+valorTotal.toFixed(2));


