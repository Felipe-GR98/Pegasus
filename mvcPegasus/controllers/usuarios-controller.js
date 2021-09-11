const { name } = require('ejs')
const Usuarios = require('../models/usuarios-model')

//exporta a variavel para os outros arquivos
//visualização dos cards
exports.listar_usuarios = (req, res) => {
    let usuarios = Usuarios.find({}, (err, usuarios) => {
        if (err) {
            console.error(err)
            return res.status(500).send("Erro ao consultar Usuarios")
        }

        res.render('pages/usuarios', { usuarios: usuarios })
    })
}


//visualização da lista
exports.listarTabela_usuarios = (req, res) => {
    let usuarios = Usuarios.find({}, (err, usuarios) => {
        if (err) {
            console.error(err)
            return res.status(500).send("Erro ao consultar Usuarios")
        }

        res.render('pages/usuariosTabela', { usuarios: usuarios })
    })
}


//pagina de cadastro
exports.cadastrar_usuarios_get = (req, res) => {
    res.render('pages/formUsuarios')
}

exports.cadastrar_usuarios_post = (req, res) => {
    console.log(req.body)

    let usu = new Usuarios()

    usu.nome = req.body.nome
    usu.cpf = req.body.cpf
    usu.email = req.body.email
    usu.telefone = req.body.telefone
    usu.nomeU = req.body.nomeU
    usu.senha = req.body.senha
    usu.mensagem = req.body.mensagem
    usu.cor = req.body.cor

    usu.save(err => {
        if (err)
            return res.status(500).send("Erro ao cadastrar Usuário")

        return res.redirect('/usuarios')
    })

}


//deletar pelo usuario
exports.deletar_usuarios = (req, res) => {
    id = req.params.id
    Usuarios.deleteOne({ _id: id }, (err, result) => {
        if (err) return res.status(500).send("Erro ao consultar usu")
    })
    res.redirect('/usuarios')
}

//deletar pelo adm
exports.deletar_adm = (req, res) => {
    id = req.params.id
    Usuarios.deleteOne({ _id: id }, (err, result) => {
        if (err) return res.status(500).send("Erro ao consultar usu")
    })
    res.redirect('/usuarios/usuariosTabela')
}


//editar - pelo usuario
exports.editar_usuarios_get = (req, res) => {
    Usuarios.findById(req.params.id, (err, usu) => {
        if (err)
            return res.status(500).send("Erro ao consultar usu")

        res.render('pages/formEditarUsuarios', { usu: usu })
        console.log(usu)
    })
}

exports.editar_usuarios_post = (req, res) => {
    console.log(id = req.body.id)
    Usuarios.findById(id, (err, usu) => {
        if (err)
            return res.status(500).send("Erro ao consultar usu")

            usu.nome = req.body.nome
        usu.cpf = req.body.cpf
        usu.email = req.body.email
        usu.telefone = req.body.telefone
        usu.nomeU = req.body.nomeU
        usu.senha = req.body.senha
        usu.mensagem = req.body.mensagem
        usu.cor = req.body.cor

        usu.save(err => {
            if (err)
                return res.status(500).send("Erro ao cadastrar Usuário")

            return res.redirect('/usuarios/')
        })

    })
}


//editar - pelo adm
exports.editar_adm_get = (req, res) => {
    Usuarios.findById(req.params.id, (err, usu) => {
        if (err)
            return res.status(500).send("Erro ao consultar usu")

        res.render('pages/formEditarAdm', { usu: usu })
  
    })
}

exports.editar_adm_post = (req, res) => {
    console.log(id = req.body.id)
    Usuarios.findById(id, (err, usu) => {
        if (err)
            return res.status(500).send("Erro ao consultar usu")

        usu.nome = req.body.nome
        usu.cpf = req.body.cpf
        usu.email = req.body.email
        usu.telefone = req.body.telefone
        usu.nomeU = req.body.nomeU
        usu.senha = req.body.senha
        usu.mensagem = req.body.mensagem
        usu.cor = req.body.cor

        usu.save(err => {
            if (err)
                return res.status(500).send("Erro ao cadastrar Usuário")

            return res.redirect('/usuarios/usuariosTabela')
        })

    })
}


//pagina que mostra so o card clicado
exports.filtrar_usuarios_get = (req, res) => {
    Usuarios.findById(req.params.id, (err, usu) => {
        if (err)
            return res.status(500).send("Erro ao consultar usu")

        res.render('pages/usuarioFiltrado', { usu: usu })
        console.log(usu)
    })
}


//pagina termos
exports.termos = (req, res) => {
    res.render('pages/termos')
}

//pagina politica
exports.politica = (req, res) => {
    res.render('pages/politica')
}