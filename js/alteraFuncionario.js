// Função para obter parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        nome: params.get("nome"),
        email: params.get("email"),
        cadastro: params.get("cadastro"),
        cpf: params.get("cpf")
    };
}

// Função para preencher o formulário com os dados do funcionário
function preencherFormulario() {
    const funcionario = getQueryParams();
    document.getElementById("nome").value = funcionario.nome;
    document.getElementById("email").value = funcionario.email;
    document.getElementById("cadastro").value = funcionario.cadastro;
    document.getElementById("cpf").value = funcionario.cpf;
}

// Função para salvar as alterações feitas no `localStorage`
function salvarAlteracoes() {
    // Pega os novos dados dos campos
    const novoNome = document.getElementById("nome").value;
    const novoEmail = document.getElementById("email").value;
    const novoCadastro = document.getElementById("cadastro").value;
    const novoCpf = document.getElementById("cpf").value;

    // Recupera a lista de funcionários do localStorage
    let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

    // Encontra o funcionário a ser alterado na lista
    const funcionarioIndex = funcionarios.findIndex(funcionario => funcionario.cadastro === novoCadastro);

    // Se encontrado, atualiza o funcionário na lista
    if (funcionarioIndex !== -1) {
        funcionarios[funcionarioIndex] = {
            nome: novoNome,
            email: novoEmail,
            cadastro: novoCadastro,
            cpf: novoCpf
        };

        // Salva novamente no localStorage com as alterações
        localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

        alert("Informações alteradas com sucesso!");
    } else {
        alert("Funcionário não encontrado.");
    }
}

// Chama a função para preencher o formulário com os dados do funcionário ao carregar a página
window.onload = preencherFormulario;

// Adiciona o evento para o botão "Salvar"
document.getElementById("editarInfoBtn").addEventListener("click", salvarAlteracoes);
