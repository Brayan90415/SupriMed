// Função para carregar e exibir as notificações de pedido de medicamento em recadoPedido.html
function carregarNotificacoesPedido() {
    const listaNotificacoes = JSON.parse(localStorage.getItem("notificacoesPedido")) || [];
    const notificacoesPedido = document.querySelector(".notificacoesPedido");

    notificacoesPedido.innerHTML = "";

    listaNotificacoes.forEach((medicamento, index) => {
        const item = document.createElement("li");
        item.className = "notificacao-item";
        item.innerHTML = `
            <img src="./assets/med.png" alt="Medicamento">
            <strong>Número:</strong> ${medicamento.numero} <br>
            <strong>Nome:</strong> ${medicamento.nome} <br>
            <strong>Quantidade:</strong> ${medicamento.quantidade} <br>
            <strong>Validade:</strong> ${medicamento.validade} <br>
            <button class="btn btn-primary" onclick="enviarPedido(${index})">Enviar</button>
        `;
        notificacoesPedido.appendChild(item);
    });
}

// Função para remover uma notificação de pedido ao clicar no botão "Enviar"
function enviarPedido(index) {
    const listaNotificacoes = JSON.parse(localStorage.getItem("notificacoesPedido")) || [];
    
    // Remove a notificação selecionada
    listaNotificacoes.splice(index, 1);
    localStorage.setItem("notificacoesPedido", JSON.stringify(listaNotificacoes));
    
    // Recarrega a lista atualizada
    carregarNotificacoesPedido();

    alert("Pedido enviado com sucesso!");
}

// Carrega as notificações de pedido automaticamente ao abrir recadoPedido.html
window.onload = carregarNotificacoesPedido;
