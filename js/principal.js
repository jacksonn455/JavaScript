var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente"); //pega a tr toda
var tdPeso = paciente.querySelector(".info-peso"); //pega a td toda
var peso =(tdPeso.textContent); 
var pesoValido = true;
var alturaValida = true;
var tbImc = document.querySelector(".info-imc");

if(peso < 0 || peso > 500){
    console.log("Peso invalido");
    pesoValido = false;
    tbImc.textContent = "Peso inválido";
}

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

if(altura < 0 || altura > 3.00){
console.log("Altura invalida");
alturaValida = false;
tbImc.textContent = "Altura inválida";
}

if(pesoValido && alturaValida){
var imc = peso / (altura * altura);
console.log(imc);

if(imc >= 0 && imc < 18,5) {
    console.log("Magresa");
}
if(imc > 18,5 && imc < 25){
    console.log("Normal");
}
if(imc >= 25 && imc <= 29){
    console.log("Sobrepeso");
}
if(imc >= 30 && imc <= 39){
    console.log("Obesidade");
}
if(imc >= 40){
    console.log("Obesidade Morbida");
}


tbImc.textContent = imc;
}