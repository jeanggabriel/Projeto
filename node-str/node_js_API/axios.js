'use trict'
var axios = require('axios');
var express = require('express');
var app = express();         
var bodyParser = require('body-parser');
var port = 3000; //porta padrão
var mysql = require('mysql');

axios({
  method:'get',
  url:'http://localhost:3000/user_carga'
})
.then(dogs => console.log(dogs.data))

axios({
  method:'post',
  url:'http://localhost:3000/user'
})
.then(dogs => console.log(dogs.data))