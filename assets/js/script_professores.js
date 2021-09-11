$(document).ready(function () {
    $('.login-dropdown').hide();
    var progresso = 1;
    var intervalId = window.setInterval(function () {
        progresso = $('input[type="checkbox"]:checked').length * 6.25;
        $('#barraProgresso').width(progresso + '%')
    }, 300);
    var click = 0;
    $('#ativar-dropdown').click(function () { 
        click++;
        if (click%2 == 0){
            $('.login-dropdown').hide(); 
        } else{
            $('.login-dropdown').show(); 
        }
    });
});