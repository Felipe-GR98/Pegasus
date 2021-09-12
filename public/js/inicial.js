//paralax 
$(document).ready(function () {
    var h1 = document.getElementById('h1-banner-inicial');
    var h2 = document.getElementById('h2-banner-inicial');

    window.addEventListener('scroll', function () {
        var mov = window.scrollY;
        console.log(mov)

        h1.style.top = mov * 0.9 + 'px';
        h2.style.top = 184+ (mov * 1) + 'px';
    })

    //contador de impacto
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },

            {
                duration: 6000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });

});


//barra de progresso do prof
var progresso = 0;
var intervalId = window.setInterval(function () {
    progresso = $('input[type="checkbox"]:checked').length * 6.25;
    console.log(progresso)
    $('#barraProgresso').width(progresso + '%')
}, 300);



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


//função para habilitar botão de cadastro
$(document).ready(function () {
    $('#tec').change(function () {
        var aceito = ($(this).val());
        console.log(aceito)

        if (aceito != "on") {
            $('#botaoAceito').prop("disabled", true);
        } else {
            $('#botaoAceito').prop("disabled", false);
        }
    });
});



$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
    //validação dos inputs no bootstrap
    (function () {
        'use strict';
        window.addEventListener('load', function () {

            var forms = document.getElementsByClassName('needs-validation');

            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();



