//chamada do express
const express = require('express')
//chamada router para chamar a função específica do express que trabalha com rotas , a Router()
const router = express.Router()

//chamada para o controller de usuarios
const usuariosController = require('../controllers/usuarios-controller')

//chamado a função específica do controller que irá trabalhar com a rota principal 
router.get('/', usuariosController.listar_usuarios)

//permite que esse arquivo seja utilizada fora
module.exports = router

//cadastrar
router.get('/cadastrarUsuarios', usuariosController.cadastrar_usuarios_get)

router.post('/cadastrarUsuarios', usuariosController.cadastrar_usuarios_post)


//deletar pelo ususario
router.get('/deletarUsuarios/:id', usuariosController.deletar_usuarios)

//deletar pelo adm
router.get('/deletarAdm/:id', usuariosController.deletar_adm)


//editar - pelo usuario
router.get('/editarUsuarios/:id', usuariosController.editar_usuarios_get)

router.post('/editarUsuarios/', usuariosController.editar_usuarios_post)

//editar - pelo administrador
router.get('/editarAdm/:id', usuariosController.editar_adm_get)

router.post('/editaradm/', usuariosController.editar_adm_post)


//lista do adm
router.get('/usuariosTabela', usuariosController.listarTabela_usuarios)

//mostra so um card
router.get('/usuarioFiltrado/:id', usuariosController.filtrar_usuarios_get)


//politica e termos
router.get('/politica', usuariosController.politica)
router.get('/termos', usuariosController.termos)