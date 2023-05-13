// 1. Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante

let letra = prompt("Digite uma letra: ")

if (letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
    document.write("É vogal!")
}else{
    document.write("É consoante!")
}