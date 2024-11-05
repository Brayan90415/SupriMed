// Verifica se foi salvo no armazenamento local e atualiza a página principal
if (document.getElementById('nomeFuncionario', 'emailFuncionario', 'cadastroFuncionario', 'cpfFuncionario')) {
    const nomeExibido = document.getElementById('nomeFuncionario');
    const emailExibido = document.getElementById('emailFuncionario');
    const cadastroExibido = document.getElementById('cadastroFuncionario');
    const cpfExibido = document.getElementById('cpfFuncionario');

    const nomeSalvo = localStorage.getItem('nome');
    const emailSalvo = localStorage.getItem('email');
    const cadastroSalvo = localStorage.getItem('cadastro');
    const cpfSalvo = localStorage.getItem('cpf');

    if (nomeSalvo, emailSalvo, cadastroSalvo, cpfSalvo) {
        nomeExibido.textContent = `${nomeSalvo}`;
        emailExibido.textContent = `${emailSalvo}`;
        cadastroExibido.textContent = `${cadastroSalvo}`;
        cpfExibido.textContent = `${cpfSalvo}`;
    }
}

// Função para salvar no armazenamento local
if (document.getElementById('editarInfoBtn')) {
    document.getElementById('editarInfoBtn').addEventListener('click', function() {
        const novoNome = document.getElementById('nome').value;
        const novoEmail = document.getElementById('email').value;
        const novoCadastro = document.getElementById('cadastro').value;
        const novoCpf = document.getElementById('cpf').value;

        if (novoNome, novoEmail, novoCadastro) {
            localStorage.setItem('nome', novoNome);
            localStorage.setItem('email', novoEmail);
            localStorage.setItem('cadastro', novoCadastro);
            localStorage.setItem('cpf', novoCpf);
            alert('Alterado com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}
