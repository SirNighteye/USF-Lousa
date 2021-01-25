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

        window.location.href = "Bem-Vindo.html";

    } else {
        // Caso contrário, mostre a mensagem de erro de login (altere sua opacidade)
        loginErrorMsg.style.display = 'block';
    }
})