const { name } = require('ejs')

//pagina inicial
exports.paginaInicial = (req, res) => {
    res.render('pages/inicial')
}

//pagina sobre nos
exports.sobre = (req, res) => {
    res.render('pages/inicial_sobre')
}

//pagina regulamento
exports.regulamento = (req, res) => {
    res.render('pages/inicial_regulamento')
}

//pagina premios
exports.premios = (req, res) => {
    res.render('pages/inicial_premios')
}

//pagina ranking
exports.ranking = (req, res) => {
    res.render('pages/inicial_ranking')
}

//pagina cronograma
exports.cronograma = (req, res) => {
    res.render('pages/inicial_cronograma')
}