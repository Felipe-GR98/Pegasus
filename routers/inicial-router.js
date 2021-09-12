//chamada do express
const express = require('express')
//chamada router para chamar a função específica do express que trabalha com rotas , a Router()
const router2 = express.Router()

//chamada para o controller da inicial
const inicialController = require('../controllers/inicial-controller')

//permite que esse arquivo seja utilizada fora
module.exports = router2

//chamado a função específica do controller que irá trabalhar com a rota principal (index.ejs)
router2.get('/', inicialController.paginaInicial)

//rotas
router2.get('/sobre', inicialController.sobre)
router2.get('/regulamento', inicialController.regulamento)
router2.get('/duvidas', inicialController.duvidas)
router2.get('/ranking', inicialController.ranking)
router2.get('/cronograma', inicialController.cronograma)