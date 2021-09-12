const mongoose = require('mongoose')

const Usuarios = mongoose.model('usuarios', { //esse usuarios é o nome no banco de dados
    nome: String,
    cpf: String,
    email: String,
    telefone: String,
    nomeU: String,
    senha: String,
    escola: String,
    alunos: String,
    codigo: String,
    cidade: String,
    estado: String,
    envioColeta: String,
    pontoColeta: String,
    envioAtividade: String,
    pontoAtividade: String,
    pontoOnline: String,
    pontoEngajamento: String,
})

//permite que eu consiga requerir posteriormente o model dentro de outros arquivos
module.exports = Usuarios

