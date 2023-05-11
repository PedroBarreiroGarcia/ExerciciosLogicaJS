// 13. Faça um script que calcule as raízes de uma equação do segundo grau,
// na forma ax² + bx + c. O script deverá pedir os valores de a, b e c e fazer os testes necessários.

let a = prompt("Entre com o valor de A:");
let b = prompt("Entre com o valor de B:");
let c = prompt("Entre com o valor de C:");
let delta=0;
let raizA=0;
let raizB=0;

delta=((b*b)-(4*a*c));

if (delta>0){
    raizA = (-b+ Math.sqrt(delta))/2*a;
    raizB = (-b- Math.sqrt(delta))/2*a;

    document.write("A raiz x1 é: "+ raizA.toFixed(2)+"<br>"+ "A raiz x2 é: "+raizB.toFixed(2)); 
    // document.write(`A raiz x1 é: ${raizA.f} <br> A raiz x2 é ${raizB.f}`);
}else{
    document.write("Não possui raízes reais");
}





