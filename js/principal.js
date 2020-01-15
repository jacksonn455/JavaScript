var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente"); //pega a tr toda
var tdPeso = paciente.querySelector(".info-peso"); //pega a td toda
var peso =(tdPeso.textContent); 
console.log(peso);// pega o valor da td peso

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var imc = peso / (altura * altura);
console.log(imc);

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

var tbImc = document.querySelector(".info-imc");
tbImc.textContent = imc;