// 27.	Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.

let quantTurmas=parseInt(prompt("Qual o número de turmas"));
let alunos=0;
let totalAlunos=0;
let media=0;
for(i=1;i<=quantTurmas;i++){
    alunos=parseInt(prompt("Qual o número de alunos na turma "+i+": "));
    while(alunos>40){
        alunos=parseInt(prompt("Digite o número de alunos da sala "+i+" menor que 40:"));
    }
    totalAlunos=totalAlunos+alunos;
}

media=totalAlunos/quantTurmas;

document.write("A média de alunos por sala é de: "+Math.trunc(media));