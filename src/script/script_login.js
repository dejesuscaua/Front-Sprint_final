function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == "" || password == "") {
        document.getElementById("error-message").innerHTML = "Usuário e senha são obrigatórios.";
        return false;
    }
    
    if (password.length < 8) {
        document.getElementById("error-message").innerHTML = "A senha deve ter no mínimo 8 caracteres.";
        return false;
    }

    if (username == "ademiro" && password == "cauagostoso"){
        document.getElementById("error-message").innerHTML = "acertou!!!";
        return false;
    }

    // Aqui você pode adicionar código para enviar os dados do formulário para o servidor e verificar se o usuário e senha são válidos.

    return true;
}