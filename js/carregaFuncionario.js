// Função para carregar e exibir os funcionários na página
function carregarFuncionarios() {
    // Recupera a lista de funcionários do localStorage
    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
    const listaFuncionarios = document.querySelector(".infoFuncionarios");

    // Limpa a lista antes de adicionar os funcionários
    listaFuncionarios.innerHTML = "";

    // Adiciona cada funcionário válido na lista
    funcionarios.forEach(funcionario => {
        if (funcionario.nome && funcionario.email && funcionario.cadastro && funcionario.cpf) {
            const item = document.createElement("li");
            item.className = "liFuncionario";
            item.innerHTML = `
                <div class="img"><img src="./assets/teste1.png" alt="Foto do funcionário"></div>
                <div class="nome" id="nomeFuncionario">${funcionario.nome}</div>
                <label for="h6"><h6>Email:</h6></label>
                <div class="email" id="emailFuncionario"><p>${funcionario.email}</p></div>
                <label for="h6"><h6>Cadastro:</h6></label>
                <div class="cadastro" id="cadastroFuncionario"><p>${funcionario.cadastro}</p></div>
                <label for="h6"><h6>CPF:</h6></label>
                <div class="cpf" id="cpfFuncionario"><p>${funcionario.cpf}</p></div>
                <div class="botoes">
                    <a href="editarFuncionario.html?nome=${funcionario.nome}&email=${funcionario.email}&cadastro=${funcionario.cadastro}&cpf=${funcionario.cpf}">
                        <button type="button" class="btn btn-primary botoes">Alterar</button>
                    </a>                    
                    <button type="button" class="btn btn-danger botoes" id="btnDeletar" onclick="deletarFuncionario('${funcionario.cadastro}')">Deletar</button>
                    <p id="mensagem"></p>
                </div>
            `;
            listaFuncionarios.appendChild(item);
        }
    });
}

// Função para deletar um funcionário
function deletarFuncionario(cadastro) {
    
    // Recupera a lista de funcionários do localStorage
    let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

    // Filtra o array de funcionários para remover o funcionário com o cadastro fornecido
    funcionarios = funcionarios.filter(funcionario => funcionario.cadastro !== cadastro);

    // Atualiza a lista de funcionários no localStorage
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

    // Recarrega a lista de funcionários após a exclusão
    carregarFuncionarios();
}

// Chama a função para carregar funcionários quando a página for aberta
window.onload = carregarFuncionarios;