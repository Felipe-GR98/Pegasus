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
        if (click % 2 == 0) {
            $('.login-dropdown').hide();
        } else {
            $('.login-dropdown').show();
        }
    });

    $('#video1unid1').click(function () {
        $("#video").attr("src", "https://www.youtube.com/embed/vV196a3vaaY");
    });
    $('#video2unid1').click(function () {
        $("#video").attr("src", "https://www.youtube.com/embed/lTwessnK0hQ");
    });
    $('#video3unid1').click(function () {
        $("#video").attr("src", "https://www.youtube.com/embed/WZIGwN-5Ioo");
    });
    $('#video4unid1').click(function () {
        $("#video").attr("src", "https://www.youtube.com/embed/DaPAqcpvUzA");
    });
    $('#video1unid2').click(function () {
        $("#video").attr("src", "https://www.youtube.com/embed/fLWqIrmVJ2E");
    });
});