function adicionarMedicamento() {
    const numero = document.getElementById("insereNumero").value.trim();
    const nome = document.getElementById("insereNome").value.trim();
    const quantidade = document.getElementById("insereQuantidade").value.trim();
    const validade = document.getElementById("insereValidade").value.trim();
    const fornecedor = document.getElementById("insereFornecedor").value.trim();

    if (!numero || !nome || !quantidade || !validade || !fornecedor) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const medicamento = { numero, nome, quantidade, validade, fornecedor };
    const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];
    medicamentos.push(medicamento);
    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));

    alert("Medicamento adicionado com sucesso!");
    document.getElementById("insereNumero").value = "";
    document.getElementById("insereNome").value = "";
    document.getElementById("insereQuantidade").value = "";
    document.getElementById("insereValidade").value = "";
    document.getElementById("insereFornecedor").value = "";

    carregarMedicamentos();
}

document.getElementById("btnAdicionar").addEventListener("click", adicionarMedicamento);
