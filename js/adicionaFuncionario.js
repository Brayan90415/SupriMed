// adicionaFuncionario.js

// Função para adicionar um novo funcionário
function adicionarFuncionario() {
    // Captura os valores inseridos no formulário
    const nome = document.getElementById("insereNome").value.trim();
    const email = document.getElementById("insereEmail").value.trim();
    const cadastro = document.getElementById("insereCadastro").value.trim();
    const cpf = document.getElementById("insereCpf").value.trim();

    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !cadastro || !cpf) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria um objeto com as informações do funcionário
    const funcionario = { nome, email, cadastro, cpf };

    // Recupera a lista de funcionários existente ou cria uma nova lista
    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

    // Adiciona o novo funcionário à lista
    funcionarios.push(funcionario);

    // Salva a lista atualizada no localStorage
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

    // Exibe uma mensagem de confirmação
    alert("Funcionário cadastrado com sucesso!");

    // Limpa os campos do formulário
    document.getElementById("insereNome").value = "";
    document.getElementById("insereEmail").value = "";
    document.getElementById("insereCadastro").value = "";
    document.getElementById("insereCpf").value = "";

    // Redireciona para a página de funcionários
    window.location.href = "funcionario.html";
}

// Adiciona um evento de clique ao botão "Cadastrar"
document.getElementById("btnAdicionar").addEventListener("click", adicionarFuncionario);
