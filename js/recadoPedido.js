// Função para adicionar uma notificação ao localStorage
function adicionarNotificacaoPedido(medicamento) {
    // Recupera as notificações existentes ou cria uma lista vazia
    const notificacoes = JSON.parse(localStorage.getItem("notificacoesPedido")) || [];

    // Adiciona a nova notificação ao array
    notificacoes.push(medicamento);

    // Salva o array atualizado no localStorage
    localStorage.setItem("notificacoesPedido", JSON.stringify(notificacoes));
}

// Função para exibir as notificações pedido de medicamento na página recadoPedido.html
function carregarNotificacoes() {
    const listaNotificacoes = JSON.parse(localStorage.getItem("notificacoesPedido")) || [];
    const notificacoesPedido = document.querySelector(".notificacoesPedido");

    // Limpa a lista de notificações antes de adicionar os itens
    notificacoesValidade.innerHTML = "";

    // Adiciona cada notificação como um item na lista
    listaNotificacoes.forEach((medicamento) => {
        const item = document.createElement("li");
        item.className = "notificacao-item";
        item.innerHTML = `
            <img src="./assets/med.png" alt="">
            <strong>Número:</strong> ${medicamento.numero} <br>
            <strong>Nome:</strong> ${medicamento.nome} <br>
            <strong>Quantidade:</strong> ${medicamento.quantidade} <br>
            <strong>Validade:</strong> ${medicamento.validade} <br>
            <button class="btn btn-primary" onclick='enviarPedido("${medicamento.numero}", "${medicamento.nome}")'>Solicitar</button>
        `;
        notificacoesPedido.appendChild(item);
    });
}

// Função para exibir mensagem de pedido enviado com informações do medicamento
function enviarPedido(numero, nome) {
    alert(`Pedido Enviado da medicação ${nome} (Número: ${numero})`);
}


// Carrega as notificações automaticamente ao abrir recadoPedido.html
if (document.querySelector(".notificacoesPedido")) {
    carregarNotificacoes();
}