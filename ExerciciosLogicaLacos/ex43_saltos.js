// 43.	Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No final da série de saltos de cada atleta, o melhor e o pior resultados são eliminados. O seu resultado fica sendo a média dos três valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe a média dos saltos conforme a descrição acima informada (retirar o melhor e o pior salto e depois calcular a média). Faça uso de uma lista para armazenar os saltos. Os saltos são informados na ordem da execução, portanto não são ordenados. O programa deve ser encerrado quando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:
// Atleta: Rodrigo Curvêllo

// Primeiro Salto: 6.5 m
// Segundo Salto: 6.1 m
// Terceiro Salto: 6.2 m
// Quarto Salto: 5.4 m
// Quinto Salto: 5.3 m

// Melhor salto:  6.5 m
// Pior salto: 5.3 m
// Média dos demais saltos: 5.9 m

// Resultado final:
// Rodrigo Curvêllo: 5.9 m

let nomeAtleta;

while (true) {
  nomeAtleta = prompt("Digite o nome do Atleta: ");
  if (nomeAtleta === "") {
    break; // Condição de parada, encerra o loop
  }

  let distSalto = [];
  let melhorSalto = 0;
  let piorSalto = 0;
  let media = 0;

  for (let i = 0; i < 5; i++) {
    distSalto[i] = parseFloat(prompt("Digite a distância do salto: "));
    media = media + distSalto[i];
  }

  melhorSalto = distSalto[0];
  piorSalto = distSalto[0];

  for (let i = 1; i < 5; i++) {
    if (distSalto[i] > melhorSalto) {
      melhorSalto = distSalto[i];
    }
    if (distSalto[i] < piorSalto) {
      piorSalto = distSalto[i];
    }
  }

  media = (media - melhorSalto - piorSalto) / 3;

  document.write("Atleta: " + nomeAtleta + "<br><br>");
  document.write("Primeiro Salto: " + distSalto[0].toFixed(1) + " m<br>");
  document.write("Segundo Salto: " + distSalto[1].toFixed(1) + " m<br>");
  document.write("Terceiro Salto: " + distSalto[2].toFixed(1) + " m<br>");
  document.write("Quarto Salto: " + distSalto[3].toFixed(1) + " m<br>");
  document.write("Quinto Salto: " + distSalto[4].toFixed(1) + " m<br><br>");
  document.write("Melhor Salto: " + melhorSalto.toFixed(1) + " m<br>");
  document.write("Pior Salto: " + piorSalto.toFixed(1) + " m<br>");
  document.write("Média dos demais Saltos: " + media.toFixed(1) + " m<br><br>");
  document.write("Resultado Final: <br>");
  document.write(nomeAtleta + ": " + media.toFixed(1) + " m<br>");
}
