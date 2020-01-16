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