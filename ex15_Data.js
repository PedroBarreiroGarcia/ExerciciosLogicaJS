// 15. Faça um script que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

let dia = parseInt(prompt("Digite o dia que desejar: "));
let mes = parseInt(prompt("Digite o mes que desejar: "));
let ano = parseInt(prompt("Digite o ano que desejar: "));


if(mes==01 || mes==03 || mes==05 || mes==07 || mes==08 || mes==10 || mes==12){
    if(dia>=1 && dia<=31){
        document.write("A data " + dia + "/"+mes+ "/"+ ano+ " é válida!");
    }else{
        document.write("A data " + dia + "/"+mes+ "/"+ ano+ " não válida!");
    }
}


if(mes==02){
    if(dia>=1 && dia<=29){
        document.write("A data " + dia + "/"+mes+ "/"+ ano+ " é válida!");
    }else{
        document.write("A data " + dia + "/"+mes+ "/"+ ano+ " não válida!");
    }
}

if(mes==04 || mes==06 || mes==09 || mes==11){
    if(dia>=1 && dia<=30){
        document.write("A data " + dia + "/"+mes+ "/"+ ano+ " é válida!");
    }else{
        document.write("A data " + dia + "/"+mes+ "/"+ ano+ " não válida!");
    }
}

