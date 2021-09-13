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
    usu.escola = req.body.escola
    usu.alunos = req.body.alunos
    usu.codigo = req.body.codigo
    usu.cidade = req.body.cidade
    usu.estado = req.body.estado
    usu.envioColeta = req.body.envioColeta
    usu.pontoColeta = req.body.pontoColeta
    usu.envioAtividade = req.body.envioAtividade
    usu.pontoAtividade = req.body.pontoAtividade
    usu.pontoOnline = req.body.pontoOnline
    usu.pontoEngajamento = req.body.pontoEngajamento

    usu.save(err => {
        if (err)
            return res.status(500).send("Erro ao cadastrar Usuário")

        return res.redirect('/inicial')
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
        usu.escola = req.body.escola
        usu.alunos = req.body.alunos
        usu.codigo = req.body.codigo
        usu.cidade = req.body.cidade
        usu.estado = req.body.estado
        usu.envioColeta = req.body.envioColeta
        usu.pontoColeta = req.body.pontoColeta
        usu.envioAtividade = req.body.envioAtividade
        usu.pontoAtividade = req.body.pontoAtividade
        usu.pontoOnline = req.body.pontoOnline
        usu.pontoEngajamento = req.body.pontoEngajamento

        usu.save(err => {
            if (err)
                return res.status(500).send("Erro ao cadastrar Usuário")

            return res.redirect('/usuarios')
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
        usu.escola = req.body.escola
        usu.alunos = req.body.alunos
        usu.codigo = req.body.codigo
        usu.cidade = req.body.cidade
        usu.estado = req.body.estado
        usu.envioColeta = req.body.envioColeta
        usu.pontoColeta = req.body.pontoColeta
        usu.envioAtividade = req.body.envioAtividade
        usu.pontoAtividade = req.body.pontoAtividade
        usu.pontoOnline = req.body.pontoOnline
        usu.pontoEngajamento = req.body.pontoEngajamento

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

//login
exports.login_prof = (req, res) => {
    res.render('pages/login_professores')
}

exports.login_submit = (req, res)=>{
    let user_type = req.query.nomeU;
    let pass_type = req.query.senha;
    console.log(user_type, pass_type)
    Usuarios.find({$and: [{nomeU: user_type}, {senha: pass_type}]}, (err, usuarios)=>{
    // Usuario.find({username: user_type}, (err, usuario)=>{
            if(err){
                return res.status(500).send("Erro ao comunicar com o Banco");
            }
            else{
                
                if(usuario.length == 0){
                    return res.render("login", {usuarios: usuarios});
                }
                console.log('Login successfuly')
                res.redirect("/usuarios");
            };
        });
};


