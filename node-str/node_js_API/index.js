'use trict'
///
///const express = require("express");
///const bodyParser = require("body-parser");
//const app = express( );
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));
//app.get('/', (req,res) => {
// res.send("ok API REST FRETE-FACIL ");
//});
//app.listen(3000);
///	
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

app.use(bodyParser.json());

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'projeto'
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log("db connection sucess");
    else
    console.log("connection failed \nerr");
});
app.listen(3000,()=>console.log("express server "));
app.get("projeto",(res,req)=>{
    mysqlConnection.query("SELECT * FROM login",(err, rows, fields)=>{
        if (!err)
        res.send(rows);
        else
        console.log(err);
    });
});