// 2.	Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

let usuario= prompt("Digite seu usúario: ");
let senha= prompt("Digite sua senha: ");

while(usuario==senha){
    alert("O usuário não pode ser igual a senha!");
    usuario=prompt("Digite seu usuario novamente:");
    senha=prompt("Digite sua senha novamente:");
}

document.write("Login validado!");
