var axios = require("axios");
axios.get("http://localhost:3000/").then(function(resposta){
    console.log(resposta.data);
});
axios.get("http://localhost:3000/user").then(function(data){
    console.log(data);
});
axios.get("http://localhost:3000/user_login").then(function(data){
    console.log(data);
});
axios.get("http://localhost:3000/user_carga").then(function(data){
    console.log(data);
});
axios.get("http://localhost:3000/user_caminhao").then(function(data){
    console.log(data);
});