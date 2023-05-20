// 26.	Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.

let candidatos = [3];
let votosTotais=parseInt(prompt("Digite o número total de votos: "));
let voto=0;
let votosCandidato1=0;
let votosCandidato2=0;
let votosCandidato3=0;

for (i = 1; i <= 3; i++) {
    candidatos[i]=prompt("Digite o nome do candidato "+i+": ");
}

for (i = 1; i <= votosTotais; i++) {
    voto=prompt("Digite 1 para o candidato "+candidatos[1]+"\nDigite 2 para o candidato "+candidatos[2] +"\nDigite 3 para o candidato "+candidatos[3]);

    if(voto==1){
        votosCandidato1++;
    }else if(voto==2){
        votosCandidato2++;
    }else if(voto==3){
        votosCandidato3++;
    }
}

document.write("O número total de votos foi de " + votosTotais + ", sendo <br>" +votosCandidato1+" votos para o candidato(a) "+ candidatos[1]+"<br> "+votosCandidato2+" votos para o candidato(a) "+ candidatos[2]+"<br> "+votosCandidato3+" votos para o candidato(a) "+ candidatos[3]);