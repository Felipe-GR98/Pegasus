//Chama o Express 
const express = require('express')
const app = express()
app.use(express.static('public'));

//Define a PORTA 
const port = 5000

//CONEXÃO COM O SERVIDOR
app.listen(process.env.PORT || port, () => {
    console.log("Servidor rodando na porta 5000")
})

//adiciona o mongoose
const mongoose = require('mongoose')

//conexao com o banco de dados
mongoose.connect('mongodb+srv://luizabd:luizabd@cluster0.oksc6.mongodb.net/pegasus?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

//permite que os dados circulem de uma pagina pra outra
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//definindo otemplate view (forma de visualização)
app.set('view engine', 'ejs') //chamando arquivos externos
app.set('views', __dirname + '/views') //o views deve estar igual ao nome da pasta

//ROTA PRINCIPAL 
app.get('/', (req, res) => {
    res.render("pages/index")
})

//ROTAS
const usuarios_router = require('./routers/usuarios-router')
app.use('/usuarios', usuarios_router)

//ROTAS
const inicial_router = require('./routers/inicial-router')
app.use('/inicial', inicial_router)

