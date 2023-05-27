// 44.	Em uma competição de ginástica, cada atleta recebe votos de sete jurados. A melhor e a pior nota são eliminadas. A sua nota fica sendo a média dos votos restantes. Você deve fazer um programa que receba o nome do ginasta e as notas dos sete jurados alcançadas pelo atleta em sua apresentação e depois informe a sua média, conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média com as notas restantes). As notas não são informados ordenadas. Um exemplo de saída do programa deve ser conforme o exemplo abaixo:
// Atleta: Aparecido Parente
// Nota: 9.9
// Nota: 7.5
// Nota: 9.5
// Nota: 8.5
// Nota: 9.0
// Nota: 8.5
// Nota: 9.7

// Resultado final:
// Atleta: Aparecido Parente
// Melhor nota: 9.9
// Pior nota: 7.5
// Média: 9,04

let nomeAtleta = prompt("Digite o nome do Atleta: ");
let notas = [];
let media = 0;
let melhorNota = 0;
let piorNota = 0;

for (let i = 0; i < 7; i++) {
  notas[i] = parseFloat(prompt("Digite a nota do jurado: "));
  media = media + notas[i];
}

melhorNota = notas[0];
piorNota = notas[0];

for (let i = 1; i < 7; i++) {
  if (notas[i] > melhorNota) {
    melhorNota = notas[i];
  }
  if (notas[i] < piorNota) {
    piorNota = notas[i];
  }
}

media = (media - melhorNota - piorNota) / 4;

document.write("Atleta: " + nomeAtleta + "<br>");

for (let i = 0; i < 7; i++) {
  document.write("Nota do jurado " + (i + 1) + ": " + notas[i].toFixed(1) + "<br>");
}

document.write("<br>Resultado final: <br>");
document.write("Atleta: " + nomeAtleta + "<br>");
document.write("Melhor nota: " + melhorNota.toFixed(1) + "<br>");
document.write("Pior nota: " + piorNota.toFixed(1) + "<br>");
document.write("Média: " + media.toFixed(2) + "<br>");
