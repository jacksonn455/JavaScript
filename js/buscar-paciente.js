var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("buscando pacientes...");

    var xhr = new XMLHttpRequest(); // pegar dados da api

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // pega o JSON e transonforma em array de objeto

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

});
       
    xhr.send();

});

