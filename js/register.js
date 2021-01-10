function defineEvents() {
    let registar_btn = document.getElementById("registar-btn");
    let form = document.getElementById("formRegistar");

    registar_btn.addEventListener("click", function() {
        if (form.checkValidity()) {
            registar();
        }
    });
}

function registar() {
    let data =
        "<h2>" +
        "Nome:" + firstName.value + " " + lastName.value +
        "<br>" +
        "Username: " +
        username.value +
        "<br>" +
        "Password: " +
        password.value +
        "<br>" +
        "Email: " +
        useremail.value +
        "</h2>";

    let dataArray = [];
    dataArray.push(username.value, password.value, useremail.value);

    dataArray = "<h2>Data em array: " + dataArray + "</h2>";

    let newLink = document.createElement("a");

    newLink.style.display = "none";

    var newWin = window.open("7.1.1signedup.html");

    newWin.document.write(data + dataArray);
}

defineEvents(); //define events