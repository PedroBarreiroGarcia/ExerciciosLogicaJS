// 28.	Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para em cada um.

let quantCDs=parseInt(prompt("Qual o número de CDS que o colecionador possui?"));
let CD=0;
let valorTotal=0;
let media=0;
for(i=1;i<=quantCDs;i++){
    CD=parseFloat(prompt("Qual o valor do "+i+" CD: "));
    valorTotal=valorTotal+CD;
}

media=valorTotal/quantCDs;

document.write("O colecionador gastou R$ "+ valorTotal.toFixed(2)+ "; com média de R$ "+ media.toFixed(2)+" para cada CD.");