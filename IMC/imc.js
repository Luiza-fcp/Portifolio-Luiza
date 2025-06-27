function calcularIMC() { /*define a função*/
    const peso = parseFloat(document.getElementById("peso").value); /*pega o valor digitado no 'peso', usa parseFloat para transformar o valor
que vem como texto em um número decimal e armazena esse numero na variavel 'peso'*/

    const altura = parseFloat(document.getElementById("altura").value); /*msm coisa, converte o numero para decimal e guarda em 'altura'*/
    const resultado = document.getElementById("resultado"); /*pega o elemento onde o resultado sera mostrado para depois atualizar o counteudo*/
    
    if (peso > 0 && altura > 0) { /*verifica se os valores sao maiores que zero */
        const imc = peso / (altura * altura); /*formula para calcular o imc*/
        let classificacao = ""; /*declara a variavel vazia para depois armazenar a categoria*/

        if (imc < 18.5) { /*abaixo sao as classificacoes para preencher a variavel acima*/
            classificacao = "Abaixo do Peso";
        } else if (imc < 25) {
            classificacao = "Peso Saudável";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        resultado.textContent = "IMC: " + imc.toFixed(2) + " (" + classificacao + ")";
        /*atualiza o conteudo 'resultado' para mosrtar o IMC. 'toFixed(2) limita o num para duas casas decimais*/
    } else {
        resultado.textContent = "Digite valores válidos"; /*caso os valores sejam menores que zero, mostra essa msg*/
    } 
} /*fecha a funcao*/