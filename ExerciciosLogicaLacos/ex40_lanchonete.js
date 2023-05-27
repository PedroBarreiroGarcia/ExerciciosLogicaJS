// 40.	O cardápio de uma lanchonete é o seguinte:
// Especificação   Código  Preço
// Cachorro Quente 100     R$ 1,20
// Bauru Simples   101     R$ 1,30
// Bauru com ovo   102     R$ 1,50
// Hambúrguer      103     R$ 1,20
// Cheeseburguer   104     R$ 1,30
// Refrigerante    105     R$ 1,00
// Faça um programa que leia o código dos itens pedidos e as quantidades desejadas. Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado.

let cod=0;
let cont = 0;
let cod100 = 0;
let cod101 = 0;
let cod102 = 0;
let cod103 = 0;
let cod104 = 0;
let cod105 = 0;
let valorTota0;

while(cont==0){
   cod=parseInt(prompt("Especificação        Código     Preço\nCachorro Quente    100     R$ 1,20\nBauru Simples         101     R$ 1,30\nBauru com ovo       102     R$ 1,50\nHambúrguer           103     R$ 1,20\nCheeseburguer       104     R$ 1,30\nRefrigerante            105     R$ 1,00"));

    if(cod==100){
        cod100++;
    }else if(cod==101){
        cod101++;
    }else if(cod==102){
        cod102++;
    }else if(cod==103){
        cod103++;
    }else if(cod==104){
        cod104++;
    }else if(cod==105){
        cod105++;
    }else{
        alert("Número do pedido inválido!"); 
    }

    cont = parseInt(prompt("Deseja realizar outro pedido?\n 0 - sim\n 1 - não"));

}

valor100=cod100*1.2;
valor101=cod101*1.3;
valor102=cod102*1.5;
valor103=cod103*1.2;
valor104=cod104*1.3;
valor105=cod105*1;

document.write("Valor pedido<br>");
document.write ("O valor total de Cachorro Quente é: R$ "+valor100.toFixed(2)+"<br>");
document.write ("O valor total de Bauru Simples é:   R$ "+valor101.toFixed(2)+"<br>");
document.write ("O valor total de Bauru com ovo é:   R$ "+valor102.toFixed(2)+"<br>");
document.write ("O valor total de Hambúrguer é:      R$ "+valor103.toFixed(2)+"<br>");
document.write ("O valor total de Cheeseburguer é:   R$ "+valor104.toFixed(2)+"<br>");
document.write ("O valor total de Refrigerante é:    R$ "+valor105.toFixed(2)+"<br>");

valorTotal=valor100+valor101+valor102+valor103+valor104+valor105;

document.write ("Total R$ "+valorTotal.toFixed(2)+"<br>");

