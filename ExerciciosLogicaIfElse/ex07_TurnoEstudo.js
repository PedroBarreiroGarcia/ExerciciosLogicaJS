// 7. Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

let turno = prompt("Digite qual turno você estuda: M para matutino, V para Vespertino ou N para Noturno ").toUpperCase();

    
if (turno == "M"){
    document.write ("Bom Dia!");
}else if (turno == "V"){
    document.write("Boa Tarde!");
}else if (turno == "N"){
    document.write("Boa Noite!");
}else{
    document.write("Valor Inválido!");
}