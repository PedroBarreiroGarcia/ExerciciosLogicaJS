// 5.	Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.

let paisA = parseInt(prompt("Digite a população inicial do país A: "));
let taxaA = parseFloat(prompt("Digite a taxa de crescimento populacional do país A: "));
let paisB = parseInt(prompt("Digite a população inicial do país B: "));
let taxaB = parseFloat(prompt("Digite a taxa de crescimento populacional do país B: "));
let anos=0;
taxaA=taxaA/100;
taxaB=taxaB/100;
alert(taxaA);
alert(taxaB);

while (paisA<paisB){
    paisA=paisA+(paisA*taxaA);
    paisB=paisB+(paisB*taxaB);
    anos++;
 }

 document.write("O país A levará " +anos+" anos para ultrapassar o número de habitantes do país B");