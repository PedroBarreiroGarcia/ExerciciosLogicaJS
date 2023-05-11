// 10. Faça um script que leia um número e exiba o dia correspondente da semana. 
// (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

let dia = prompt("Digite um dia da semana de 1 a 7: ");

switch(dia){
    case "1":
        alert ("Domingo!");
        break
    case "2":
        alert ("Segunda!");
        break
    case "3":
        alert ("Terça!");
        break
    case "4":
        alert ("Quarta!");
        break
    case "5":
        alert ("Quinta!");
        break
    case "6":
        alert ("Sexta!");
        break
    case "7":
        alert ("Sábado!");
        break
    
    default:
        alert("Número inválido!")
}