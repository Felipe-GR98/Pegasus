function highlight_map_states() {
    if ($(".states_section").length > 0) {
        $(".states_section .list_states .item .link").hover(function () {
            var a = "#state_" + $(this).text().toLowerCase();
            $(a).attr("class", "state hover")
        }, function () {
            var a = "#state_" + $(this).text().toLowerCase();
            $(a).attr("class", "state")
        })
    }
};

var resultado = document.getElementById('resultado');

$('#shape_ba').click(function () { 
    resultado.innerHTML = `
    <h1>   [Bahia] </h1>
    Escolas públicas: 13.918<br>
    Escolas cadastradas no projeto: 336
    `
});
$('#shape_se').click(function () { 
    resultado.innerHTML = `
    <h1>   [Sergipe] </h1>
    Escolas públicas: 1.668<br>
    Escolas cadastradas no projeto: 94
    `
});
$('#shape_pe').click(function () { 
    resultado.innerHTML = `
    <h1>   [Pernambuco] </h1>
    Escolas públicas: 6.159<br>
    Escolas cadastradas no projeto: 456
    `
});
$('#shape_mt').click(function () { 
    resultado.innerHTML = `
    <h1>   [Mato Grosso do Norte] </h1>
    Escolas públicas: 2.264<br>
    Escolas cadastradas no projeto: 142
    `
});
$('#shape_al').click(function () { 
    resultado.innerHTML = `
    <h1>   [Alagoas] </h1>
    Escolas públicas: 2.392<br>
    Escolas cadastradas no projeto: 269
    `
});
$('#shape_am').click(function () { 
    resultado.innerHTML = `
    <h1>   [Amazonas] </h1>
    Escolas públicas: 5.011<br>
    Escolas cadastradas no projeto: 254
    `
});
$('#shape_pa').click(function () { 
    resultado.innerHTML = `
    <h1>   [Pará] </h1>
    Escolas públicas: 9.788<br>
    Escolas cadastradas no projeto: 74
    `
});
$('#shape_ro').click(function () { 
    resultado.innerHTML = `
    <h1>   [Rondônia] </h1>
    Escolas públicas: 1.076<br>
    Escolas cadastradas no projeto: 285
    `
});
$('#shape_ac').click(function () { 
    resultado.innerHTML = `
    <h1>   [Acre] </h1>
    Escolas públicas: 1.520<br>
    Escolas cadastradas no projeto: 65
    `
});
$('#shape_ap').click(function () { 
    resultado.innerHTML = `
    <h1>   [Amapá] </h1>
    Escolas públicas: 760<br>
    Escolas cadastradas no projeto: 78
    `
});
$('#shape_rj').click(function () { 
    resultado.innerHTML = `
    <h1>   [Rio de Janeiro] </h1>
    Escolas públicas: 6.582<br>
    Escolas cadastradas no projeto: 300
    `
});
$('#shape_rs').click(function () { 
    resultado.innerHTML = `
    <h1>   [Rio Grande do Sul] </h1>
    Escolas públicas: 7.274<br>
    Escolas cadastradas no projeto: 132
    `
});
$('#shape_sc').click(function () { 
    resultado.innerHTML = `
    <h1>   [Santa Cantarina] </h1>
    Escolas públicas: 5.180<br>
    Escolas cadastradas no projeto: 183
    `
});
$('#shape_pr').click(function () { 
    resultado.innerHTML = `
    <h1>   [Paraná] </h1>
    Escolas públicas: 7.340<br>
    Escolas cadastradas no projeto: 381
    `
});
$('#shape_sp').click(function () { 
    resultado.innerHTML = `
    <h1>   [São Paulo] </h1>
    Escolas públicas: 18.821<br>
    Escolas cadastradas no projeto: 1.202
    `
});
$('#shape_ms').click(function () { 
    resultado.innerHTML = `
    <h1>   [Mato Grosso do Sul] </h1>
    Escolas públicas: 1.314<br>
    Escolas cadastradas no projeto: 55
    `
});
$('#shape_go').click(function () { 
    resultado.innerHTML = `
    <h1>   [Goiás] </h1>
    Escolas públicas: 3.491<br>
    Escolas cadastradas no projeto: 459
    `
});
$('#shape_mg').click(function () { 
    resultado.innerHTML = `
    <h1>   [Minas Gerais] </h1>
    Escolas públicas: 12.034<br>
    Escolas cadastradas no projeto: 1.263
    `
});
$('#shape_es').click(function () { 
    resultado.innerHTML = `
    <h1>   [Espírito Santo] </h1>
    Escolas públicas: 2.719<br>
    Escolas cadastradas no projeto: 96
    `
});
$('#shape_pi').click(function () { 
    resultado.innerHTML = `
    <h1>   [Píaui] </h1>
    Escolas públicas: 3.984<br>
    Escolas cadastradas no projeto: 267
    `
});
$('#shape_ce').click(function () { 
    resultado.innerHTML = `
    <h1>   [Ceará] </h1>
    Escolas públicas: 5.921<br>
    Escolas cadastradas no projeto: 330
    `
});
$('#shape_rr').click(function () { 
    resultado.innerHTML = `
    <h1>   [Roraima] </h1>
    Escolas públicas: 799<br>
    Escolas cadastradas no projeto: 153
    `
});
$('#shape_to').click(function () { 
    resultado.innerHTML = `
    <h1>   [Tocantins] </h1>
    Escolas públicas: 1.428<br>
    Escolas cadastradas no projeto: 533
    `
});
$('#shape_ma').click(function () { 
    resultado.innerHTML = `
    <h1>   [Maranhão] </h1>
    Escolas públicas: 10.664<br>
    Escolas cadastradas no projeto: 122
    `
});
$('#shape_rn').click(function () { 
    resultado.innerHTML = `
    <h1>   [Rio Grande do Norte] </h1>
    Escolas públicas: 2.849<br>
    Escolas cadastradas no projeto: 218
    `
});
$('#shape_pb').click(function () { 
    resultado.innerHTML = `
    <h1>   [Paraíba] </h1>
    Escolas públicas: 3.917<br>
    Escolas cadastradas no projeto: 222
    `
});
$('#shape_df').click(function () { 
    resultado.innerHTML = `
    <h1>   [Distrito Federal] </h1>
    Escolas públicas: 685<br>
    Escolas cadastradas no projeto: 11
    `
});
