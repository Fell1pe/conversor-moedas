// Cria const para todos os elementos do website
const form = document.getElementById('investment-form');
const amountInput = document.getElementById('amount');
const periodInput = document.getElementById('period');
const rateInput = document.getElementById('rate');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('reset');


function simulateInvestment(event) { //cria função de simularInvestimentos e adiciona event 
    event.preventDefault(); // adiciona elemento preventDefault para que não haja problemas na execução do código, onde o mesmo será rodado juntamente com o html na página

    //cria 3 navas consts pegando informações de consts anteriores e dando valor a elas, também dizendo que
    const amount = parseFloat(amountInput.value); // nessa const é usado parseFloat que transforma a string criada em um número decimal
    const period = parseInt(periodInput.value); // nessa const é usado parseInt para transformar a string enviada pelo campo de input em um inteiro
    const rate = parseFloat(rateInput.value) / 100; // nessa const é usado parseFloat para transformar a strng criada em um número decimal logo após o número é dividido por 100

    if (isNaN(amount) || amount <= 0 || isNaN(period) || period <= 0 || isNaN(rate)) { // verifica o valor presente em todos os campos e se estão de acordo com 
        resultDiv.innerHTML = 'Por favor, insira valores válidos.';
        return; // caso as informações estejam incorretas ele exibe uma mensagem de erro e retorna a função para parar o funcionamento do js
    }

    // Cálculo do montante futuro com juros compostos mensais
    const futureValue = (amount * Math.pow((1 + rate / 12), period)).toFixed(2); // cria-se uma const para dizer o valor futuro onde pega o valor de amont e faz vezes, (1 + rate / 12) => Isso simula o efeito dos juros compostos ao longo do tempo. Cada período (mês) aplica novamente a taxa de crescimento sobre o valor acumulado, aumentando o valor total, com isso obtem-se o valor de period. Após é utilizado toFixed para limitar o valor consedido a duas casas decimais.

    resultDiv.innerHTML = `<p>Após ${period} meses, seu investimento será equivalente a ${futureValue}.</p>`;
    // nesse momento é informado o resultado da operação colocando os valores concedidos dentro das funções representadas por ${}.
}

// Função para resetar o formulário e o resultado
// mesmo funcionamento do reset do conversor de moedas
function resetForm() {  // cria função resetar
    form.reset(); // // linca e diz que a função reset será utilizada no form
    resultDiv.innerHTML = ''; // diz para que o campo seja esvaziado 
}

// Adicionando os event listeners para o submit do formulário e o botão de reset
form.addEventListener('submit', simulateInvestment);
resetButton.addEventListener('click', resetForm);
