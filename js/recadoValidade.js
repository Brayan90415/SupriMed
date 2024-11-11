// Função para adicionar uma notificação de falta de medicamento ao localStorage
function adicionarNotificacaoValidade(medicamento) {
    // Recupera as notificações existentes ou cria uma lista vazia
    const notificacoes = JSON.parse(localStorage.getItem("notificacoesValidade")) || [];

    // Adiciona a nova notificação ao array
    notificacoes.push(medicamento);

    // Salva o array atualizado no localStorage
    localStorage.setItem("notificacoesValidade", JSON.stringify(notificacoes));
}

// Função para exibir as notificações de falta de medicamento na página recadoEstoque.html
function carregarNotificacoes() {
    const listaNotificacoes = JSON.parse(localStorage.getItem("notificacoesValidade")) || [];
    const notificacoesValidade = document.querySelector(".notificacoesValidade");

    // Limpa a lista de notificações antes de adicionar os itens
    notificacoesValidade.innerHTML = "";

    // Adiciona cada notificação como um item na lista
    listaNotificacoes.forEach((medicamento) => {
        const item = document.createElement("li");
        item.className = "notificacao-item";
        item.innerHTML = `
            <strong>Número:</strong> ${medicamento.numero} <br>
            <strong>Nome:</strong> ${medicamento.nome} <br>
            <button class="btn btn-primary" onclick='enviarPedido("${medicamento.numero}", "${medicamento.nome}")'>Alerta por falta</button>
        `;
        notificacoesValidade.appendChild(item);
    });
}

// Função para exibir mensagem de pedido enviado com informações do medicamento
function enviarPedido(numero, nome) {
    alert(`Pedido Enviado para ${nome} (Número: ${numero})`);
}


// Carrega as notificações automaticamente ao abrir recadoEstoque.html
if (document.querySelector(".notificacoesValidade")) {
    carregarNotificacoes();
}
