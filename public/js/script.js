var progresso = 0;
var intervalId = window.setInterval(function () {
    progresso = $('input[type="checkbox"]:checked').length * 6.25;
    console.log(progresso)
    $('#barraProgresso').width(progresso + '%')
}, 300);
