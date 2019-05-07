var axios = require("axios");
axios.get("http://localhost:3000/user").then(function(resposta){
    console.log(resposta.data);
});
axios.get("http://localhost:3000/user_login").then(function(resposta){
    console.log(resposta.data);
});
axios.get("http://localhost:3000/user_carga").then(function(resposta){
    console.log(resposta.data);
});
axios.get("http://localhost:3000/user_caminhao").then(function(resposta){
    console.log(resposta.data);
});