// Função para carregar e exibir a lista de pessoas na página principal
function carregarListaFuncionario() {
    const listaFuncionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    const listaElement = document.getElementById('liFuncionario');

    listaElement.innerHTML = ''; // Limpa a lista
    listaFuncionarios.forEach((funcionario) => {
        const item = document.createElement('li');
        item.textContent = funcionario;
        listaElement.appendChild(item);
    });
}

// Função para adicionar uma nova pessoa
function adicionarFuncionario() {
    const insereNome = document.getElementById('insereNome');
    const insereEmail = document.getElementById('insereEmail');
    const insereCadastro = document.getElementById('insereCadastro');
    const insereCPF = document.getElementById('insereCpf');

    const novoNome = insereNome.value.trim();
    const novoEmail = insereEmail.value.trim();
    const novoCadastro = insereCadastro.value.trim();
    const novoCpf = insereCPF.value.trim();

    if (novoNome, novoEmail, novoCadastro, novoCpf) {
        const liFuncionario = JSON.parse(localStorage.getItem('funcionarios')) || [];

        liFuncionario.push(novoNome);
        liFuncionario.push(novoEmail);
        liFuncionario.push(novoCadastro);
        liFuncionario.push(novoCpf);

        localStorage.setItem('funcionarios', JSON.stringify(liFuncionario));
        alert('Funcionario adicionado com sucesso!');
        insereNome.value = ''; // Limpar o campo
        insereEmail.value = ''; // Limpar o campo
        insereCadastro.value = ''; // Limpar o campo
        insereCPF.value = ''; // Limpar o campo

    } else {
        alert('Por favor, digite em todos os campos.');
    }
}

// Executa funções específicas para cada página
if (document.getElementById('liFuncionario')) {
    carregarListaPessoas(); // Carregar lista na página principal
}

if (document.getElementById('btnAdicionar')) {
    document.getElementById('btnAdicionar').addEventListener('click', adicionarFuncionario);
}
