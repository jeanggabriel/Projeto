'use trict'
var axios = require('axios');
var express = require('express');
var app = express();         
var bodyParser = require('body-parser');
var port = 3000; //porta padrão
var mysql = require('mysql');
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//definindo as rotas
var router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Welcome To API => Frete-Fácil!' }));
app.use('/', router);
app.listen(port);
console.log('API funcionando!');
  function execSQLQuery(sqlQry, res){
    var connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'frete-facil',
      password : 'fretefacil123',
      database : 'projeto',
      insecureAuth: true
    });
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou !');
    });
  }
router.get('/user', (req, res, get) =>{
      execSQLQuery('SELECT * FROM user', res);
  });
router.get('/user_login', (req, res, get) =>{
      execSQLQuery('SELECT * FROM user_login', res);
  });
  router.get('/user_carga', (req, res, get) =>{
    execSQLQuery('SELECT * FROM user_carga', res);
});
router.get('/user_caminhao', (req, res, get) =>{
  execSQLQuery('SELECT * FROM user_caminhao', res);
});
router.post('/user :id?', (req, res) =>{
  var filter = '';
  if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM user' + filter, res);
});
router.delete('/user_login :id', (req, res) =>{
  execSQLQuery('DELETE * FROM user WHERE ID=' + parseInt(req.params.id), res);
});
router.post('/user', (req, res) =>{
  var email = req.body.email;
  var senha = req.body.senha;
  execSQLQuery(`INSERT INTO user (email, senha) VALUES ('${email}','${senha}')`, res);
});

router.get('/user_login :id?', (req, res) =>{
    var filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM user_login' + filter, res);
});
router.delete('/users_login :id', (req, res) =>{
    execSQLQuery('DELETE * FROM user_login WHERE ID=' + parseInt(req.params.id), res);
});
router.post('/user_login', (req, res) =>{
    var nome = req.body.nome;
    var telefone = req.body.telefone;
    var email = req.body.email;
    var senha = req.body.senha;
    var tipo_de_cadastro = req.body.tipo_de_cadastro;
    var foto = req.body.foto;
    execSQLQuery(`INSERT INTO user_login (nome, telefone, email, senha, tipo_de_cadastro, foto) VALUES ('${nome}','${telefone}','${email}','${senha}','${tipo_de_cadastro}','${foto}')`, res);
});
router.get('/users_carga :id?', (req, res) =>{
  var filter = '';
  if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM user_carga' + filter, res);
});
router.delete('/users_carga :id', (req, res) =>{
  execSQLQuery('DELETE * FROM user_carga WHERE ID=' + parseInt(req.params.id), res);
});
router.post('/user_carga', (req, res) =>{
  var tipo = req.body.tipo;
  var descricao = req.body.descricao;
  var cidade = req.body.cidade;
  var estado = req.body.estado;
  var cep = req.body.cep;
  var peso = req.body.peso;
  execSQLQuery(`INSERT INTO user_carga (tipo, descricao, cidade,  estado, cep, peso ) VALUES ('${tipo}', '${descricao}', '${cidade}', '${estado}','${cep}', '${peso}')`, res);
});
router.get('/user_caminhao :id?', (req, res) =>{
  var filter = '';
  if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM user_caminhao' + filter, res);
});
router.delete('/user_caminhao :id', (req, res) =>{
  execSQLQuery('DELETE * FROM user_caminhao WHERE ID=' + parseInt(req.params.id), res);
});
router.post('/user_caminhao', (req, res) =>{
  var tipo = req.body.tipo;
  var foto = req.body.foto;
  var peso_max = req.body.peso_max;
  execSQLQuery(`INSERT INTO user_caminhao (tipo, foto, peso_max) VALUES ('${tipo}','${foto}','${peso_max}')`, res);
});
module.exports = app;
module.exports = axios;