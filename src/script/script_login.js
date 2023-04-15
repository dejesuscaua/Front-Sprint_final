function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == "" || password == "") {
        document.getElementById("error-message").innerHTML = "Usuário e senha são obrigatórios.";
        console.log("Usuário e senha são obrigatórios.")
        return false;
    }
    
    if (password.length < 8) {
        document.getElementById("error-message").innerHTML = "A senha deve ter no mínimo 8 caracteres.";
        console.log("A senha deve ter no mínimo 8 caracteres.")
        return false;
    }

    if (username == "adm" && password == "fiap123456"){
        document.getElementById("error-message").innerHTML = "Login feito com sucesso!!!";
        console.log("Login feito com sucesso!!!")
        return false;
    }

    // Aqui você pode adicionar código para enviar os dados do formulário para o servidor e verificar se o usuário e senha são válidos.

    return true;
}