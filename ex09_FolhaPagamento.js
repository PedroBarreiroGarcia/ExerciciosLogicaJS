// 9. Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

    // Desconto do IR:
    // Salário Bruto até 900 (inclusive) - isento
    // Salário Bruto até 1500 (inclusive) - desconto de 5%
    // Salário Bruto até 2500 (inclusive) - desconto de 10%
    // Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

    // Salário Bruto: (5 * 220)        : R$ 1100,00
    // (-) IR (5%)                                : R$   55,00
    // (-) INSS ( 10%)                       : R$  110,00
    // FGTS (11%)                            : R$  121,00
    // Total de descontos                : R$  165,00
    // Salário Liquido                       : R$  935,00

    let valorHora = parseFloat(prompt("Entre com o valor da sua hora: "));
    let quantHoras = parseInt(prompt("Entre com a quantidade de horas trabalhadas: "));
    let salarioBruto = valorHora*quantHoras;
    let desconto_IR;
    let desconto_INSS;
    let desconto_FGTS;
    let totalDesconto=0;
    let salarioLiquido=0;
    
    document.write("Salário Bruto: ("+valorHora+ " * "+quantHoras+")       : R$ "+ salarioBruto.toFixed(2));

    if(salarioBruto<=900){
        desconto_IR=0.00;
        document.write("<br>(-) IR (isento) : R$ "+desconto_IR.toFixed(2));
    } else if(salarioBruto>900 && salarioBruto<=1500){
        desconto_IR=salarioBruto*0.05;
        document.write("<br>(-) IR (5%): R$ "+desconto_IR.toFixed(2));
    }else if(salarioBruto>1500 && salarioBruto<=2500){
        desconto_IR=salarioBruto*0.1;
        document.write("<br>(-) IR (10%) : R$ "+desconto_IR.toFixed(2));
    }else if(salarioBruto>2500){
        desconto_IR=salarioBruto*0.2;
        document.write("<br>(-) IR (20%) : R$ "+desconto_IR.toFixed(2));
    }
    totalDesconto=totalDesconto+desconto_IR;

    desconto_INSS=salarioBruto*.1;
    document.write("<br>(-) INSS (10%) : R$ "+desconto_INSS.toFixed(2));
    totalDesconto=totalDesconto+desconto_INSS;

    desconto_FGTS=salarioBruto*.11;
    document.write("<br>(-) FGTS (11%) : R$ "+desconto_FGTS.toFixed(2));
    totalDesconto=totalDesconto+desconto_FGTS;

    document.write("<br> Total de Descontos : R$ "+totalDesconto.toFixed(2));

    salarioLiquido=salarioBruto-totalDesconto;
    document.write("<br> Salário Líquido : R$ "+salarioLiquido.toFixed(2));

    

