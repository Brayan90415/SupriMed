//notificação de pedido/solicitação de medicamento
function pedidoMedicamento(){
    // Obtém as informações do medicamento
    const numeroMedicamento = document.querySelector("#numMedicamento").textContent.replace("numero medicação: ", "");
    const nomeMedicamento = document.querySelector("#nomelMedicamento").textContent.replace("nome: ", "");
    const quantidadeMedicamento = document.querySelector("#qntMedicamento").textContent.replace("quantidade em estoque: ", "");
    const validadeMedicamento = document.querySelector("#validadeMedicamento").textContent.replace("validade: ", "");

    // Cria um objeto com os dados do medicamento
    const medicamento = {
        numero: numeroMedicamento,
        nome: nomeMedicamento,
        quantidade: quantidadeMedicamento,
        validade: validadeMedicamento
    };

    // Adiciona a notificação ao localStorage
    adicionarNotificacaoPedido(medicamento);

    // Exibe um alerta confirmando a ação
    alert("Pedido do medicamento enviada.");
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