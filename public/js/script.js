$(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#codigo').mask('00000000');
});

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


//botao retornar ao topo
$(document).ready(function () {
    $(window).scroll(function () {
        var altura = $(window).scrollTop();
        if (altura > 400) {
            $(".botao-top").show();
        } else {
            $(".botao-top").hide();
        }
    });

    $('.botao-top a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 100
        }, 1200);
    });

});


var progresso = 0;
var intervalId = window.setInterval(function () {
    progresso = $('input[type="checkbox"]:checked').length * 6.25;
    console.log(progresso)
    $('#barraProgresso').width(progresso + '%')
}, 300);
