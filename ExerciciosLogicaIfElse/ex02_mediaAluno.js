// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
        // A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
        // A mensagem "Reprovado", se a média for menor do que sete;
        // A mensagem "Aprovado com Distinção", se a média for igual a dez.

        let nota1 = parseFloat(prompt("Entre com a primeira nota: "));
        let nota2 = parseFloat(prompt("Entre com a segunda nota: "));
        let media;

        media= (nota1+nota2)/2

        if (media ==10){
            document.write("Aprovado com Distinção!")
        } else if(media>=7){
            document.write("Aprovado!")
        }else if(media<7){
            document.write("Reprovado!")
        }