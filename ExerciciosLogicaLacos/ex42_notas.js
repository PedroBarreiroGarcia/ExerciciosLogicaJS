// 42.	Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema. Após todos os alunos terem respondido informar:
// a.	Maior e Menor Acerto;
// b.	Total de Alunos que utilizaram o sistema;
// c.	A Média das Notas da Turma.
// d.	Gabarito da Prova:

// 01 - A
// 02 - B
// 03 - C
// 04 - D
// 05 - E
// 06 - E
// 07 - D
// 08 - C
// 09 - B
// 10 - A
// Após concluir isto você poderia incrementar o programa permitindo que o professor digite o gabarito da prova antes dos alunos usarem o programa.

// let respostaAluno = [];
// let gabarito = [];
// let acertos = 0;
// let questaoMaisAcerto=0;
// let questaoMenosAcerto=0;

// do{
//     for (let i = 1; i <= 10; i++) {
//         gabarito.push(prompt("Professor(a), digite a resposta correta da questão " + i + ": "));
//       }
      
//     for (let i = 1; i <= 10; i++) {
//         respostaAluno.push(prompt("Digite a resposta da questão " + i + " do aluno: "));
//     }
      
//     for (let i = 1; i <= 10; i++) {
//         if (gabarito[i] == respostaAluno[i]) {
//           acertos++;
//         }
//     }

//     questaoMaisAcerto=respostaAluno[1];
//     questaoMenosAcerto=respostaAluno[1];

//     for (let i = 1; i <= 10; i++) {
//         if (gabarito[i] == respostaAluno[i]) {
//           acertos++;
//         }
//     }

//     cont = parseInt(prompt("Deseja realizar outro pedido?\n 1 - sim\n 0 - não"));
      
// }while(voto != 0);

let gabarito = [];
let maiorAcerto = 0;
let menorAcerto = 10;
let totalAlunos = 0;
let somaNotas = 0;

// Perguntar ao professor pelo gabarito da prova
for (let i = 1; i <= 10; i++) {
  let resposta = prompt("Digite a resposta da questão " + i + ":");
  gabarito.push(resposta.toUpperCase());
}

let outroAluno = true;

while (outroAluno) {
  let respostasAluno = [];
  let notaAluno = 0;

  // Perguntar ao aluno as respostas
  for (let i = 1; i <= 10; i++) {
    let resposta = prompt("Digite a resposta da questão " + i + " do aluno:");
    respostasAluno.push(resposta.toUpperCase());

    // Verificar se a resposta está correta
    if (resposta.toUpperCase() === gabarito[i - 1]) {
      notaAluno++;
    }
  }

  // Atualizar os valores de maior e menor acerto
  if (notaAluno > maiorAcerto) {
    maiorAcerto = notaAluno;
  }
  if (notaAluno < menorAcerto) {
    menorAcerto = notaAluno;
  }

  totalAlunos++;
  somaNotas += notaAluno;

  // Perguntar se outro aluno vai utilizar o sistema
  outroAluno = confirm("Outro aluno vai utilizar o sistema?");

}

let mediaNotas = somaNotas / totalAlunos;

// Exibir os resultados
document.write("Resultados:<br>");
document.write("Maior Acerto: " + maiorAcerto + "<br>");
document.write("Menor Acerto: " + menorAcerto + "<br>");
document.write("Total de Alunos: " + totalAlunos + "<br>");
document.write("Média das Notas: " + mediaNotas.toFixed(2) + "<br>");
document.write("Gabarito da Prova:<br>");

// Exibir o gabarito da prova
for (let i = 0; i < 10; i++) {
  document.write((i + 1) + " - " + gabarito[i] + "<br>");
}

  
  
  