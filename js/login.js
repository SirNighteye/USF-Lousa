const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// Quando o botão de login é clicado, o seguinte código é executado
loginButton.addEventListener("click", (e) => {
    // Impedir o envio padrão do formulário
    e.preventDefault();
    // Obtem os valores inseridos pelo usuário nos campos do formulário
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        // Se as credenciais forem válidas, mostra uma caixa de alerta e recarrega a página
        alert("Você fez login com sucesso.");
        window.location.href = "welcome_user.html";

        location.reload();
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.display = 'block';
    }
})