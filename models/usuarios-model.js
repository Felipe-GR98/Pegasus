const mongoose = require('mongoose')

const Usuarios = mongoose.model('usuarios', { //esse usuarios é o nome no banco de dados
    nome: String,
    cpf: String,
    email: String,
    telefone: String,
    nomeU: String,
    senha: String,
    mensagem: String,
    cor: String
})

//permite que eu consiga requerir posteriormente o model dentro de outros arquivos
module.exports = Usuarios

