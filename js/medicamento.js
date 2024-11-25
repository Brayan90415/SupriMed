// Função para adicionar notificação de pedido/solicitação de medicamento
function pedidoMedicamento(element) {
    const medicamentoElement = element.closest(".medicamento");
    const numeroMedicamento = medicamentoElement.querySelector(".number span").textContent;
    const nomeMedicamento = medicamentoElement.querySelector(".name span").textContent;
    
    // Converte a quantidade em estoque para um número inteiro
    const quantidadeMedicamento = parseInt(medicamentoElement.querySelector(".qnt span").textContent, 10);
    const validadeMedicamento = medicamentoElement.querySelector(".validade span").textContent;

    const medicamento = {
        numero: numeroMedicamento,
        nome: nomeMedicamento,
        quantidade: quantidadeMedicamento,
        validade: validadeMedicamento
    };

    const notificacoes = JSON.parse(localStorage.getItem("notificacoesPedido")) || [];
    notificacoes.push(medicamento);
    localStorage.setItem("notificacoesPedido", JSON.stringify(notificacoes));

    alert(`Pedido do medicamento "${nomeMedicamento}" enviado.`);
}



//Notificação de falta
function faltaMedicamento(buttonElement) {
    // Localiza o elemento pai do botão clicado
    const medicamentoElement = buttonElement.closest(".medicamento");

    // Obtém os dados do medicamento
    const numeroMedicamento = medicamentoElement.querySelector(".number span").textContent;
    const nomeMedicamento = medicamentoElement.querySelector(".name span").textContent;
    const fornecedorMedicamento = medicamentoElement.querySelector(".fornecedor span").textContent;

    // Cria um objeto com os dados do medicamento
    const medicamento = {
        numero: numeroMedicamento,
        nome: nomeMedicamento,
        fornecedor : fornecedorMedicamento
    };

    // Adiciona a notificação ao localStorage
    adicionarNotificacaoFalta(medicamento);

    // Exibe um alerta confirmando a ação
    alert(`Notificação de falta do medicamento "${nomeMedicamento}" enviada.`);
}


//Notificação por validade
function validadeMedicamento(button) {
    // Encontra o elemento pai mais próximo com a classe "medicamento"
    const medicamentoElement = button.closest(".medicamento");

    // Obtém os dados do medicamento a partir dos elementos filhos
    const numeroMedicamento = medicamentoElement.querySelector(".number span").textContent;
    const nomeMedicamento = medicamentoElement.querySelector(".name span").textContent;
    const fornecedorMedicamento = medicamentoElement.querySelector(".fornecedor span").textContent;

    // Cria um objeto com os dados do medicamento
    const medicamento = {
        numero: numeroMedicamento,
        nome: nomeMedicamento,
        fornecedor :fornecedorMedicamento
    };

    // Adiciona a notificação ao localStorage
    adicionarNotificacaoValidade(medicamento);

    // Exibe um alerta confirmando a ação
    alert(`Notificação de validade do medicamento "${nomeMedicamento}" enviada.`);
}