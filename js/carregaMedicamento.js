function carregarMedicamentos() {
    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];
    const listaMedicamentos = document.querySelector(".medicamentos");
    listaMedicamentos.innerHTML = "";

    medicamentos.forEach(medicamento => {
        if (medicamento.numero && medicamento.nome && medicamento.quantidade && medicamento.validade && medicamento.fornecedor) {
            const item = document.createElement("li");
            item.className = "medicamento";
            item.innerHTML = `
                <img src="./assets/med.png" alt="Medicamento">
                <div class="number">Número medicação: <span>${medicamento.numero}</span></div>
                <div class="name">Nome: <span>${medicamento.nome}</span></div>
                <div class="qnt">Quantidade em estoque: <span>${medicamento.quantidade}</span></div>
                <div class="validade">Validade: <span>${medicamento.validade}</span></div>
                <div class="fornecedor">Fornecedor: <span>${medicamento.fornecedor}</span></div>
                <div class="btn">
                    <input class="btn btn-primary" type="button" onclick="pedidoMedicamento(this)" value="Solicitar">
                    <input class="btn btn-primary" type="button" onclick="faltaMedicamento()" value="Alerta por falta">
                    <input class="btn btn-primary" type="button" onclick="validadeMedicamento()" value="Alerta por validade">
                </div>
            `;
            listaMedicamentos.appendChild(item);
        }
    });
}

window.addEventListener("load", carregarMedicamentos);
