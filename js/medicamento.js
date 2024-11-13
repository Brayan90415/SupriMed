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
function faltaMedicamento() {
    // Obtém as informações do medicamento
    const numeroMedicamento = document.querySelector("#numMedicamento").textContent.replace("numero medicação: ", "");
    const nomeMedicamento = document.querySelector("#nomelMedicamento").textContent.replace("nome: ", "");

    // Cria um objeto com os dados do medicamento
    const medicamento = {
        numero: numeroMedicamento,
        nome: nomeMedicamento
    };

    // Adiciona a notificação ao localStorage
    adicionarNotificacaoFalta(medicamento);

    // Exibe um alerta confirmando a ação
    alert("Notificação de falta de medicamento enviada.");
}

//Notificação por validade
function validadeMedicamento(){
    // Obtém as informações do medicamento
    const numeroMedicamento = document.querySelector("#numMedicamento").textContent.replace("numero medicação: ", "");
    const nomeMedicamento = document.querySelector("#nomelMedicamento").textContent.replace("nome: ", "");

    // Cria um objeto com os dados do medicamento
    const medicamento = {
        numero: numeroMedicamento,
        nome: nomeMedicamento
    };

    // Adiciona a notificação ao localStorage
    adicionarNotificacaoValidade(medicamento);

    // Exibe um alerta confirmando a ação
    alert("Notificação de validade de medicamento enviada.");
}