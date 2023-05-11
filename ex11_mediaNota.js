// 11. Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre,
//  e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

// Média de Aproveitamento  Conceito
//     Entre 9.0 e 10.0                      A
//     Entre 7.5 e 9.0                       B
//     Entre 6.0 e 7.5                       C
//     Entre 4.0 e 6.0                       D
//     Entre 4.0 e zero                      E
// O algoritmo deve mostrar numa janela de alert as notas, a média, 
// o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let media = (nota1+nota2)/2;

if (media<4){
    alert("\n"+ "Nota 1: "+nota1+ "\n"+ "Nota 2: "+nota2+ "\n"+ "Média: "+media.toFixed(2)+"\n"+ "Conceito: E"+"\n"+ "REPROVADO!");
}else if(media>4 && media<=6){
    alert("\n"+ "Nota 1: "+nota1+ "\n"+ "Nota 2: "+nota2+ "\n"+ "Média: "+media.toFixed(2)+"\n"+ "Conceito: D"+"\n"+ "REPROVADO!");
}else if(media>6 && media<=7.5){
    alert("\n"+ "Nota 1: "+nota1+ "\n"+ "Nota 2: "+nota2+ "\n"+ "Média: "+media.toFixed(2)+"\n"+ "Conceito: C"+"\n"+ "REPROVADO!");
}else if(media>7.5 && media<=9){
    alert("\n"+ "Nota 1: "+nota1+ "\n"+ "Nota 2: "+nota2+ "\n"+ "Média: "+media.toFixed(2)+"\n"+ "Conceito: B"+"\n"+ "REPROVADO!");
}else if(media>9 && media<=10){
    alert("\n"+ "Nota 1: "+nota1+ "\n"+ "Nota 2: "+nota2+ "\n"+ "Média: "+media.toFixed(2)+"\n"+ "Conceito: A"+"\n"+ "REPROVADO!");
}