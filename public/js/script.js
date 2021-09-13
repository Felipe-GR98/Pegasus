$(document).ready(function () {

    //mascara  
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#codigo').mask('00000000');

    $("#nome").blur(function () {
        var nome_val = document.querySelector("#nome").value;

        if (!isNaN(nome_val)) {
            $("#spanNome").text("Insira um nome válido.");
        }
        else {
            $("#spanNome").text("");
            return true;
        }
    });

    $("#cpf").blur(function () {
        var cpf_val = document.querySelector("#cpf").value;

        if (cpf_val.length != 14) {
            $("#spanCPF").text("Insira um cpf válido.");
        }
        else {
            $("#spanCPF").text("");

        }
    });

    $("#email").blur(function () {
        var email_val = document.querySelector("#email").value;

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email_val) == false) {
            $("#spanEmail").text("Insira um e-mail válido.");

        } else {
            $(".spanRed").text("");
            $(".dados").attr("data-toggle", "tab");
            $(".emailAba").attr("data-toggle", "tab");
            $(".emailAba").removeClass("active").attr("aria-selected", "false");
            $(".dados").addClass("active").attr("aria-selected", "true");
            $("#emailAba").removeClass("active");
            $("#dados").addClass("active");
        }
    });














    // $("#nomeU").blur(function () {
    //     var nome_val = document.querySelector("#nome").value; 
    //     var email_val = document.querySelector("#email").value;      
    //     var cpf_val = document.querySelector("#cpf").value;
    //     var tel_val = document.querySelector("#telefone").value;
    //     var senha_val = document.querySelector("#senha").value;
    //     var senhaConfirma_val = document.querySelector("#confirmaSenha").value;
    //     var nome_val = document.querySelector("#nomeU").value;       

    //     //validação e-mail        
    //     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //     if (reg.test(email_val) == false) {
    //         $("#spanEmail").text("Insira um e-mail válido.");            

    //     } else {
    //         $(".spanRed").text("");
    //         $(".dados").attr("data-toggle", "tab");
    //         $(".emailAba").attr("data-toggle", "tab");
    //         $(".emailAba").removeClass("active").attr("aria-selected", "false");
    //         $(".dados").addClass("active").attr("aria-selected", "true");
    //         $("#emailAba").removeClass("active");
    //         $("#dados").addClass("active");            
    //     }       

    //     if (!isNaN(nome_val)) {
    //         $("#spanNome").text("Insira um nome válido.");
    //     }
    //     if (!isNaN(sobrenome_val)) {
    //         $("#spanSobrenome").text("Insira um sobrenome válido.");
    //     }
    //     if (cpf_val.length != 14) {
    //         $("#spanCPF").text("Insira um cpf válido.");
    //     }
    //     if (tel_val.length != 15) {
    //         $("#spanTelefone").text("Insira um telefone válido.");
    //     }
    //     if (senha_val.length < 6) {
    //         $("#spanSenha").text("Mínimo de 6 dígitos.");
    //     }
    //     if (senhaConfirma_val.length < 6 || senhaConfirma_val !== senha_val) {
    //         $("#spanSenhaConfirma").text("Senha não confere.");
    //     }
    //     else {  
    //         $('#botaoAceito').prop("disabled", false);
    //         return true;
    //     }
    // });


    //função para habilitar botão de cadastro
    $('#tec').change(function () {
        var aceito = ($(this).val());
        console.log(aceito)
        if (aceito != "on") {
            $('#botaoAceito').prop("disabled", true);
        } else {
            $('#botaoAceito').prop("disabled", false);
        }
    });


    $("#codigo").blur(function () {
        var escola1 = 12424119;
        var escola2 = 75161167;
        var escola3 = 95812623;
        var escola4 = 40427286;
        var escola5 = 21692848;
        var escola6 = 24452679;

        aux = document.querySelector("#codigo").value;

        switch (aux) {
            case "12424119":
                $("#escola").attr("placeholder", "E.E. Correia Costa");
                break

            case "75161167":
                $("#escola").attr("placeholder", "E.M. Margarida Guimarães");
                break

            case "95812623":
                $("#escola").attr("placeholder", "E.E. João Carlos");
                break

            case "40427286":
                $("#escola").attr("placeholder", "E.M. Maria Antônia");
                break

            case "21692848":
                $("#escola").attr("placeholder", "E.E. Zumbi dos Palmares");
                break

            case "24452679":
                $("#escola").attr("placeholder", "E.E. Floral Amaral");
                break
        }
    });

});

