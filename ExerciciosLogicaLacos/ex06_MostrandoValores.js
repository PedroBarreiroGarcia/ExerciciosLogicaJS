// 6.	Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.

let cont=1;
document.write("Agora sequencia um embaixo do outro: ");
for(cont=1;cont<=20;cont++){
    document.write(cont+"<br>");
}
document.write("<br> Agora sequencia um ao lado do outro: ");
for(cont=1;cont<=20;cont++){
    document.write(cont+"   ");
}