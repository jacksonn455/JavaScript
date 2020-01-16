var titulo = document.querySelector(".titulo"); // salva o titulo do html
titulo.textContent = "Aparecida Nutricionista"; // altera o titulo


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
        // paciente.style.color("red"); altera o css 
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
titulo.addEventListener("click", mostraMensagem); // escutador de evento click

function mostraMensagem(){
    console.log("olá eu fui clicado");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
   
    console.log(form.altura.value); // ve o dado escrito no form

var nome = form.nome.value;
var peso = form.peso.value;
var altura = form.altura.value;  // Pega os dados do form
var gordura = form.gordura.value;

var pacienteTr = document.createElement("tr"); // cria tabela

var nomeTd = document.createElement("td"); // cria linha da tabela
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura; // aplica os valores do form na linha
gorduraTd.textContent = gordura;

pacienteTr.appendChild(nomeTd); // colocando as linhas dentro da tabela
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr); // coloca o tr dentro da tabela html

});