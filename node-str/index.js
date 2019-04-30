const express = require ('express');
const bodyParser = require ('body-parser');

var Auth = require ('./routes/Auth');
var User = require ('./routes/User');
var Projects = require ('./routes/Project');
const Members = require ('./routes/Member');

const CORS = require ('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(CORS());

/* Rotas para API de Autenticação */
app.use('/v1/auth', Auth);
/* Rotas para API de Usuários */
app.use('/v1/users', User);
/*Rotas para API de Projetos */
app.use('/v1/projects', Projects);
/*Rotas para API de Membros do Projeto */
app.use('/v1/members', Members);


app.listen(8080);