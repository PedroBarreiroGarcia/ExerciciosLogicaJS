// 47.	Sendo H= 1 + 1/2 + 1/3 + 1/4 + ... + 1/N, Faça um programa que calcule o valor de H com N termos.

let numeroTermos=parseInt(prompt("Digite o número de termos: "));
let soma = 0;
let termo;

for(i=1;i<=numeroTermos;i++){
    termo=1/i;
    soma = soma+ termo;
}
document.write("Série H = ");
for(i=1;i<=numeroTermos;i++){
    if (i==numeroTermos){
        termo=(1+"/"+i);
        document.write(termo);
        break
    }
    termo=(1+"/"+i+" +              ");
    document.write(termo);
}


document.write("<br>Soma: " + soma.toFixed(2));