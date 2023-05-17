// 12.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
// a.	Tabuada de 5:
// b.	5 X 1 = 5
// c.	5 X 2 = 10
// d.	...
// e.	5 X 10 = 50

let num= parseInt(prompt("Digite o número que deseja ver a tabuada: "));

document.write("Tabuada do número: "+num+"<br> ");
for(i=1; i<=10;i++){
    document.write(num+" x "+i+" = "+num*i+"<br>");
}
