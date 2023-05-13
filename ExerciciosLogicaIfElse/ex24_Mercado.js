// 24. O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                           Até 5 Kg               Acima de 5 Kg
//     File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
//     Alcatra           R$ 5,90 por Kg          R$ 6,80 por Kg
//     Picanha          R$ 6,90 por Kg          R$ 7,80 por Kg
//     Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

let carne= prompt("Qual tipo de carne deseja comprar? \n F - File Duplo\n A - Alcatra\n P - Picanha");
let kg = parseFloat(prompt("Digite quantos quilos deseja comprar: "));
let cartao = prompt("A compra será feita no cartão Tabajara tendo 5% de desconto?\n S - Sim\n N - Não");
let valor;
let desconto=0;

if (carne.toLowerCase() === "f") {
    carne=("File Duplo");
    if (kg<=5){
        valor=kg*4.9;
    }else{
        valor=kg*5.8;
    }
}else if (carne.toLowerCase() === "a") {
    carne=("Alcatra");
    if (kg<=5){
        valor=kg*5.9;
    }else{
        valor=kg*6.8;
    }
}else if (carne.toLowerCase() === "p") {
    carne=("Picanha");
    if (kg<=5){
        valor=kg*6.9;
    }else{
        valor=kg*7.8;
    }
}else{
    document.write("Insira um valor válido!");
}

if(cartao.toLowerCase() === "s"){
    cartao=("cartão");
    desconto=.95;
    valor=valor*desconto;
}else{
    cartao=("sem cartão");
}

document.write("Foi comprado "+kg.toFixed(2)+ " kg de "+ carne+ ".\nA forma de pagamento é: "+ cartao+ ". Tendo desconto de: R$ "+ desconto+ " tendo por valor total da compra: R$ "+ valor.toFixed(2));

