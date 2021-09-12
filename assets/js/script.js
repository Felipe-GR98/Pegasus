$(function() {
    $(window).resize(function() {
        if(window.innerWidth > 920){
            $('.vertical-divisao').show();
        }else{
            $('.vertical-divisao').hide();
        }
    }).resize();
});