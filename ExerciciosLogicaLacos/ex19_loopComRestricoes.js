// 19.	Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
let quantNum = parseInt(prompt("Digite quantos números deseja inserir: "));
let num;
let maior;
let menor;
let soma = 0;

for (let i = 1; i <= quantNum; i++) {
do{
    num = parseInt(prompt("Digite um número entre 0 e 1000: "));
}while(num<0 || num>1000);

  if (i === 1) {
    maior = num;
    menor = num;
  } else {
    if (num > maior) {
      maior = num;
    }
    if (num < menor) {
      menor = num;
    }
  }

  soma += num;
}

document.write("Dentre os " + quantNum + " números inseridos, o menor é o " + menor + ", o maior é o " + maior + " e a soma de todos os números é " + soma);