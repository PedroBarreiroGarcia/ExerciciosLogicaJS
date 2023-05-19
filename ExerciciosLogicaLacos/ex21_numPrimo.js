// 21.	Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

// let num = parseInt(prompt("Digite um número: "));
// let primo=1;

// for (i=1;i<=num;i++){
//     if (num%i==1){
//         primo++;
//     }
// }

// if(primo>2){
//     document.write("O número " + num + " não primo");
// }else{
//     document.write("O número " + num + " primo");
// }

let num = parseInt(prompt("Digite um número: "));
let primo = 0;

for (let i = 2; i <= num; i++) {
  if (num % i == 0) {
    primo++;
  }
}

if (primo == 1) {
  document.write("O número " + num + " é primo");
} else {
  document.write("O número " + num + " não é primo");
}
