const express = require("express");
const app = express(); // Pega todas as funções do express e passa para uma única uma variável
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const Post = require('./models/Post');
const { where } = require("sequelize/types");

// Config 
    // Template engine, estamos falando para o express que queremos usar o template handlebars.
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

// Rotas
    app.get('/', (req, res) => {
        Post.findAll({order: [['id', 'DESC']]}).then(posts => {
            res.render(__dirname + '/views/layouts/home', {posts: posts});
        }); // Retorna todos os posts dentro do meu banco de dados.
    })  // DESC Do mais novo pro mais antigo, ASC do mais antigo pro mais novo

    app.get('/cad', (req, res) => { // Rota para o cadastro.
        res.render(__dirname +'/views/layouts/formulario');
    });

    app.post('/add', (req, res) => { // Essa rota só pode ser acessada pelo formulário que usa o metódo post.
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/');
        }).catch((err) => {
            res.send(`Erro ${err}`);
        });
    });

    app.get('/deletar/:id', (req, res) => {
        Post.destroy({where: {'id': req.params.id}}).then(() => {
            res.send('Postagem deletada.');
        }).catch(err => {
            res.send('Essa postagem não existe.');
        });
    });

// Essa linha tem que ser a última do meu código.
app.listen(8081, () => {
    console.log("Servidor rodando na ulr http://localhost:8081");
});


/*
    Erro cannot GET: é um erro porque nenhuma rota esta estabelecida no programa.

    app.get("/blog/sobre", (req, res) => {
        res.send("Minha pagina sobre");    É utilizado para que sempre que o usuário entrar em uma parte da aplicação
    });                                  ele entre para uma página diferente.   

    app.get("/ola/:nome") ... /:nome /:cor /:cargo são parâmetros que podemos passar para a pag, sendo assim 
        acessamos a mesma utilizando o req.params.nomeDoParâmetro
    
    Em cada app.get podemos usar apenas um res.send, sendo executado mais de um vamos obter o erro:
    Can't set headrers after they are sent.

    nodemon arquivo.js só funciona apenas quando o arquivo está na raiz do projeto, juntamente ao dirname.

    app.post serve para receber os dados por parâmetro e salvar as mesmas no banco de dados.

    */