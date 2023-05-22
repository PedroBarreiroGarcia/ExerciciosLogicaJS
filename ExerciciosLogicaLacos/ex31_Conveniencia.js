// 31.	O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:
// Lojas Tabajara 
// Produto 1: R$ 2.20
// Produto 2: R$ 5.80
// Produto 3: R$ 0
// Total: R$ 9.00
// Dinheiro: R$ 20.00
// Troco: R$ 11.00
// ...
let valorProduto = 1;
let valorTotal=0;
document.write("\nLojas Tabajara<br>");
// for(i=1;i<=1000;i++){
//     while(valorProduto!=0){
//         valorProduto=parseFloat(prompt("Digite o valor do produto: "));
//         valorTotal+=valorProduto;
//         document.write("Produto "+i+": R$ "+valorProduto.toFixed(2)+"\n");
//     }
//     document.write("Total: R$ "+valorTotal.toFixed(2)+"\n");
//     let pagamento = parseFloat(prompt("Digite o valor pago: "));
//     document.write("Dinheiro: R$ "+pagamento.toFixed(2)+"\n");
//     document.write("Troco: R$ "+pagamento-valorTotal.toFixed(2)+"\n");
// }


while(valorProduto!=0){
    for(i=1;i<=1000;i++){
        valorProduto=parseFloat(prompt("Digite o valor do produto: "));
        valorTotal+=valorProduto;
        document.write("Produto "+i+": R$ "+valorProduto.toFixed(2)+"<br>");
        if(valorProduto==0){
            break
        }
    }
    document.write("Total: R$ "+valorTotal.toFixed(2)+"<br>");
    let pagamento = parseFloat(prompt("Digite o valor pago: "));
    document.write("Dinheiro: R$ "+pagamento.toFixed(2)+"<br>");
    let troco= pagamento-valorTotal;
    document.write("Troco: R$ "+troco.toFixed(2)+"<br>");
}