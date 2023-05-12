// 21. Faça um script que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//     "Telefonou para a vítima?"
//     "Esteve no local do crime?"
//     "Mora perto da vítima?"
//     "Devia para a vítima?"
//     "Já trabalhou com a vítima?" O script deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

let cont = 0;
let resposta = prompt("Telefonou para a vítima? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

resposta = prompt("Esteve no local do crime? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

resposta = prompt("Mora perto da vítima? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

resposta = prompt("Devia para a vítima? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

resposta = prompt("Já trabalhou com a vítima? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

if (cont <= 1) {
    document.write("A pessoa é inocente!");
} else if (cont === 2) {
    document.write("A pessoa é suspeita!");
} else if (cont === 3 || cont === 4) {
    document.write("A pessoa é cúmplice!");
} else if (cont === 5) {
    document.write("A pessoa é o(a) assassino(a)!");
}



