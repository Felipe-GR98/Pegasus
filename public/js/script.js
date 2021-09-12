$(document).ready(function () {




//mascara
$(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#codigo').mask('00000000');
});


$(document).ready(function () {  

    //validação dados pessoais 

    $("#nome").blur(function () {
        var nome_val = document.querySelector("#nome").value;  
        
        console.log(nome_val)

        if (!isNaN(nome_val)) {
            $("#spanNome").text("Insira um nome válido.");
        }       
        else {  
            $('#botaoAceito').prop("disabled", false);
            return true;
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

});


//função para habilitar botão de cadastro
// $(document).ready(function () {
//     $('#tec').change(function () {
//         var aceito = ($(this).val());
//         console.log(aceito)
//         if (aceito != "on") {
//             $('#botaoAceito').prop("disabled", true);
//         } else {
//             $('#botaoAceito').prop("disabled", false);
//         }
//     });
// });



//Entrar adm
function validarAdm() {
    var passwordAdm = "123";
    var nAdm = prompt("Digite a senha de administração do site");

    console.log(passwordAdm)
    console.log(nAdm)

    if (passwordAdm === nAdm) {
        window.location.href = "/usuarios/usuariosTabela"
    } else {
        alert("Senha incorreta")
    }
}



});