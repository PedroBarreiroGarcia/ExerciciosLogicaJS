// 38.	Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de trânsito. Foram obtidos os seguintes dados:
// a.	Código da cidade;
// b.	Número de veículos de passeio (em 1999);
// c.	Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
// d.	Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
// e.	Qual a média de veículos nas cinco cidades juntas;
// f.	Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.
let cidades = [5];
let veiculos = [5];
let acidentes = [5];
let somaAcidentes=0;
let cidadesAcidentes=0;

cidades[1]=parseInt(prompt("Digite o código da cidade 1: "));
veiculos[1]=parseInt(prompt("Digite o número de veiculos da cidade 1 em 1999: "));
acidentes[1]=parseInt(prompt("Digite o número de acidentes da cidade 1 em 1999: "));

let maiorIndice=acidentes[1];
let codMaiorIndice=cidades[1]
let menorIndice=acidentes[1];
let codMenorIndice=cidades[1];
let somaVeiculos=veiculos[1];
if(veiculos[1]<2000){
    somaAcidentes=somaAcidentes+acidentes[1];
    cidadesAcidentes++;
}


for (i = 2; i <= 5; i++) {
    cidades[i]=parseInt(prompt("Digite o código da cidade "+i+": "));
    veiculos[i]=parseInt(prompt("Digite o número de veiculos da cidade "+i+" em 1999: "));
    acidentes[i]=parseInt(prompt("Digite o número de acidentes da cidade "+i+" em 1999: "));
    somaVeiculos=somaVeiculos+veiculos[i];
    if(veiculos[i]<2000){
        somaAcidentes=somaAcidentes+acidentes[i];
        cidadesAcidentes++;
    }
    if(maiorIndice<acidentes[i]){
        maiorIndice=acidentes[i];
        codMaiorIndice=cidades[i];
    }
    if(menorIndice>acidentes[i]){
        menorIndice=acidentes[i];
        codMenorIndice=cidades[i];
    }
}

document.write("O menor indíce é de:  " + menorIndice + " e percente a cidade com código:  "+codMenorIndice+"<br>");
document.write("O maior indíce é de:  " + maiorIndice + " e percente a cidade com código:  "+codMaiorIndice+"<br>");
document.write("A média de veículos das 5 cidades é de: "+(somaVeiculos/5).toFixed(0)+"<br>");
document.write("A média de acidentes nas cidades com menos de 2000 veículos é de: "+(somaAcidentes/cidadesAcidentes).toFixed(0)+"<br>");

