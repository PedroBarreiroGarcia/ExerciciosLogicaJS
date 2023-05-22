// 32.	O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.
let validacao=0;
let temperatura=parseFloat(prompt("Digite o valor de uma temperatura: "));
let maior=temperatura;
let menor=temperatura;
let quantInsercoes=1;
let temperaturaTotal=temperatura;
let media=0;

while(validacao!=1){
    validacao=(prompt("Deseja inserir outra temperatura?\n 0 - sim\n 1- não "));
    if(validacao==1){
        break
    }
    temperatura=parseFloat(prompt("Digite o valor de uma temperatura: "));
    if(maior<temperatura){
        maior=temperatura;
    }

    if(temperatura<menor){
        menor=temperatura;
    }
    quantInsercoes++;
    temperaturaTotal+=temperatura;
}

document.write("A menor temperatura registrada foi de: "+menor+"<br>");
document.write("A maior temperatura registrada foi de: "+maior+"<br>");
media=temperaturaTotal/quantInsercoes;
document.write("A tempteratura média foi de : "+media.toFixed(1));

