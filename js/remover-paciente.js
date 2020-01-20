var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function () {
    var AlvoEvento = event.target;
    var paiDoAlvo = AlvoEvento.parentNode;

    paiDoAlvo.remove();
});