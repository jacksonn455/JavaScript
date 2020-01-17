var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informação do paciente no form
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);
    var erro = validaPaciente(paciente);

    if (erro.length > 0) {
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro;
        return;
    }  

    if(erro.length > 0){
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erro;
    return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

});

function obtemPacienteDoFormulario(form) {
    //obj
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gorduraTd"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return "";
    } else {
        return "Peso inválido";
    }
    if (validaAltura(paciente.altura)) {
        return "";
    } else {
        return "Altrura inválida";
    }
}