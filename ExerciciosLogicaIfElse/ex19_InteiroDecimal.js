// 19.Faça um script que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.

let num = prompt("Digite um número qualquer: ");

if(Math.trunc(num)==num){
    document.write("O número é inteiro!");
}else{
    document.write("O número é decimal!");
}