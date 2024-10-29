function autenticarUsuario() {
    // Obtém os valores dos campos de entrada
    const username = document.getElementById("username").value;
    const cadastro = document.getElementById("cadastro").value;
    const errorMessage = document.getElementById("error-message");
    
    // Lógica de autenticação
    if (username === "brayan" && cadastro === "maxbr90415") {
        // Redireciona para a página de administrador
        window.location.href = "administrador.html";
    }

    else if (username === "" && cadastro === "") {
            // Formulário vazio
            alert("Preencha todos os campos")
    }

    else if (username !== "brayan" && cadastro !== "maxbr90415") {
        // Redireciona para a página de funcionário
        window.location.href = "estoque.html";
    }

     else {
    // Exibe mensagem de erro caso o usuário/senha estejam incorretos
        errorMessage.style.display = "block";
    }
    
    // Previne o envio do formulário para evitar recarregar a página
    return false;
}
