function pedidoMedicamento(){
    const botaoSolicitar = document.getElementById("solicitar").value;
    const errorMessage = document.getElementById("error-message");

    alert("Pedido enviado")
}

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


function validadeMedicamento(){
    const botaoSolicitar = document.getElementById("alertaSolicitar").value;

    alert("Notificação enviada.")
}