'use trict'
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);
app.listen(port);
console.log('API funcionando!');
  function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'root',
      password : '',
      database : 'projeto'
    });
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }
router.get('/login', (req, res, get) =>{
      execSQLQuery('SELECT * FROM login', res);
  });    
router.get('/login/:id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM login' + filter, res);
})
router.delete('/login/:id', (req, res) =>{
    execSQLQuery('DELETE FROM login WHERE ID=' + parseInt(req.params.id), res);
})
router.post('/login', (req, res) =>{
    const nome = req.body.nome.substring(0,45);
    const telefone = req.body.telefone.substring(0,45);
    const email = req.body.email.substring(0,45);
    const senha = req.body.senha.substring(0,45);
    const tipo_de_cadastro = req.body.tipo_de_cadastro.substring(0,45);
    const foto = req.body.foto.substring(0,255)
    execSQLQuery(`INSERT INTO login(nome, telefone, email, senha, tipo_de_cadastro, foto) VALUES('${nome}','${telefone}','${email}','${senha}','${tipo_de_cadastro}','${foto})`, res);
});