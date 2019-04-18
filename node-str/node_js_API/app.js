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
      user     : 'frete-facil',
      password : 'fretefacil123',
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
router.get('/users_login', (req, res, get) =>{
      execSQLQuery('SELECT * FROM users_login', res);
  });
  router.get('/users_carga', (req, res, get) =>{
    execSQLQuery('SELECT * FROM users_carga', res);
});
router.get('/users_caminhao', (req, res, get) =>{
  execSQLQuery('SELECT * FROM users_caminhao', res);
}); 
router.get('/users_login :id?', (req, res) =>{
    let filter = '';
    if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM users_login' + filter, res);
})
router.delete('/users_login :id', (req, res) =>{
    execSQLQuery('DELETE * FROM users_login WHERE ID=' + parseInt(req.params.id), res);
})
router.post('/users_login', (req, res) =>{
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const senha = req.body.senha;
    const tipo_de_cadastro = req.body.tipo_de_cadastro;
    const foto = req.body.foto;
    execSQLQuery(`INSERT INTO users_login (nome, telefone, email, senha, tipo_de_cadastro, foto) VALUES ('${nome}','${telefone}','${email}','${senha}','${tipo_de_cadastro}','${foto}')`, res);
});
router.get('/users_carga :id?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM users_carga' + filter, res);
})
router.delete('/users_carga :id', (req, res) =>{
  execSQLQuery('DELETE * FROM users_carga WHERE ID=' + parseInt(req.params.id), res);
})
router.post('/users_carga', (req, res) =>{
  const tipo = req.body.tipo;
  const descricao = req.body.descricao;
  const cidade = req.body.cidade;
  const estado = req.body.estado;
  const cep = req.body.cep;
  const peso = req.body.peso;
  execSQLQuery(`INSERT INTO users_carga (tipo, descricao, cidade,  estado, cep, peso ) VALUES ('${tipo}', '${descricao}', '${cidade}', '${estado}','${cep}', '${peso}')`, res);
});
router.get('/users_caminhao :id?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM users_caminhao' + filter, res);
})
router.delete('/users_caminhao :id', (req, res) =>{
  execSQLQuery('DELETE * FROM users_caminhao WHERE ID=' + parseInt(req.params.id), res);
})
router.post('/users_caminhao', (req, res) =>{
  const tipo = req.body.tipo;
  const foto = req.body.foto;
  const peso_max = req.body.peso_max;
  execSQLQuery(`INSERT INTO users_caminhao (tipo, foto, peso_max) VALUES ('${tipo}','${foto}','${peso_max}')`, res);
});
module.exports = app;