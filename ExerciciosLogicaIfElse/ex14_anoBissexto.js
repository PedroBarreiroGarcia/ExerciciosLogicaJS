// 14. Faça um script que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

let ano = parseInt(prompt("Digite o ano que deseja decidir se é bissexto: "));

if (ano %4 ==0){
    document.write( "O ano de " + ano + "  é bissexto! "); 
}else{
    document.write( "O ano  de " + ano + " não é bissexto! "); 
}