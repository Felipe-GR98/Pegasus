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




