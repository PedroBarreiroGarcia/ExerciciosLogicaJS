// 48.	Faça um programa que mostre os n termos da Série a seguir:
// S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m. 
// Imprima no final a soma da série.

let numeroTermos=parseInt(prompt("Digite o número de termos: "));
let soma = 0;
let termo;

for(i=1;i<=numeroTermos;i++){
    termo=i/(i * 2 - 1);
    soma = soma+ termo;
}
document.write("Série:");
for(i=1;i<=numeroTermos;i++){
    if (i==numeroTermos){
        termo=(i+"/"+(i * 2 - 1));
        document.write(termo);
        break
    }
    termo=(i+"/"+(i * 2 - 1)+" +              ");
    document.write(termo);
}


document.write("<br>Soma: " + soma.toFixed(2));