// 3.	Faça um programa que leia e valide as seguintes informações:
// a.	Nome: maior que 3 caracteres;
// b.	Idade: entre 0 e 150;
// c.	Salário: maior que zero;
// d.	Sexo: 'f' ou 'm';
// e.	Estado Civil: 's', 'c', 'v', 'd';
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
let nome=prompt("Digite um nome:");
while(nome.length<3){
    alert("Digite um nome com mais de 3 caracteres!");
    nome=prompt("Digite um nome:");
}

let idade = parseInt(prompt("Digite uma idade:"));
while (idade < 0 || idade > 150) {
  alert("Digite uma idade entre 0 e 150!");
  idade = parseInt(prompnt("Digite outra idade:"));
}

let salario=parseFloat(prompt("Digite seu salário:"));
while(salario<0){
    alert("Digite um salário maior que zero!");
    salario=parseFloat(prompt("Digite seu salário:"));
}

let sexo=prompt("Digite um sexo:\n f- Feminino\n m - masculino");
while(sexo!="f" && sexo!="m"){
    alert("Digite: f para feminino ou m para masculino!");
    sexo=prompt("Digite um sexo:");
}

let estadoCivil=prompt("Digite um estado civil:\n s - solteiro(a)\n c - casado(a)\n v - viúvo(a)\n d - divorciado");
while(estadoCivil!="s" && estadoCivil!="c" && estadoCivil!="v"&& estadoCivil!="d"){
    alert("Digite um estado civil válido:\n s - solteiro(a)\n c - casado(a)\n v - viúvo(a)\n d - divorciado");
    estadoCivil=prompt("Digite um sexo:");
}

document.write(" Nome: "+nome+"<br> Idade: "+idade+"<br>  Salário: R$ "+salario.toFixed(2)+"<br> Sexo: "+sexo+"<br>  Estado Civil: "+estadoCivil);