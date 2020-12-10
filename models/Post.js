// Fica todo nosso model de posts
const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post; // Usado para salvar no banco de dados
//Post.sync({force: true});