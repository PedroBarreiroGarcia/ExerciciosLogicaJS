// 25.	Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada.

let quantIdades = parseInt(prompt("Digite o número de idades da turma que deseja inserir: "));
let somaIdades = 0;
let idade=0;
let media=0;

for (i = 1; i <= quantIdades;i++) {
    idade = parseInt(prompt("Digite a nota: "));
    somaIdades=somaIdades+idade;
}

media=somaIdades/quantIdades;
if(media>=0 && media<=25){
    document.write("A média de idade da turma é de: "+Math.trunc(media)+" ou seja, é uma turma jovem");
}else if (media>25 && media<=60){
    document.write("A média de idade da turma é de: "+Math.trunc(media)+" ou seja, é uma turma adulta");
}else if (media>60){
    document.write("A média de idade da turma é de: "+Math.trunc(media)+" ou seja, é uma turma idosa");
}
