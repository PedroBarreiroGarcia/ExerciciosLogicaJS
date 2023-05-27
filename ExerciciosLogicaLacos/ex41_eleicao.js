// 41.	Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de código. Os códigos utilizados são:
// 1 , 2, 3, 4  - Votos para os respectivos candidatos 
// (você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
// 5 - Voto Nulo
// 6 - Voto em Branco
// Faça um programa que calcule e mostre:
// O total de votos para cada candidato;
// O total de votos nulos;
// O total de votos em branco;
// A percentagem de votos nulos sobre o total de votos;
// A percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos tem-se o valor zero.
let candidatos = [];
let votosTotais = 0;
let voto = 0;
let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;
let votosCandidato4 = 0;
let votosNulo = 0;
let votosBranco = 0;

for (let i = 1; i <= 4; i++) {
  candidatos.push(prompt("Digite o nome do candidato " + i + ": "));
}

do{
  voto = parseInt(prompt("Digite 1 para o candidato " + candidatos[0] + "\nDigite 2 para o candidato " + candidatos[1] + "\nDigite 3 para o candidato " + candidatos[2] + "\nDigite 4 para o candidato " + candidatos[3] + "\nDigite 5 para voto nulo\nDigite 6 para voto em branco\n Digite 0 para parar de contar"));

  if (voto == 1) {
    votosCandidato1++;
  } else if (voto == 2) {
    votosCandidato2++;
  } else if (voto == 3) {
    votosCandidato3++;
  } else if (voto == 4) {
    votosCandidato4++;
  } else if (voto == 5) {
    votosNulo++;
  } else if (voto == 6) {
    votosBranco++;
  }
}while(voto != 0);

votosTotais = votosCandidato1 + votosCandidato2 + votosCandidato3 + votosCandidato4 + votosNulo + votosBranco;

document.write("O número total de votos foi de " + votosTotais + ", sendo <br>" + votosCandidato1 + " votos para o candidato(a) " + candidatos[0] + "<br> " + votosCandidato2 + " votos para o candidato(a) " + candidatos[1] + "<br> " + votosCandidato3 + " votos para o candidato(a) " + candidatos[2] + "<br> " + votosCandidato4 + " votos para o candidato(a) " + candidatos[3] + "<br> " + votosNulo + " votos nulo <br> " + votosBranco + " votos em branco<br>");

votosNulo = 100 * (votosNulo / votosTotais);
votosBranco = 100 * (votosBranco / votosTotais);

document.write("A porcentagem de votos nulos é de " + votosNulo.toFixed(2) + "%<br>A porcentagem de votos em branco é de " + votosBranco.toFixed(2) + "%");
