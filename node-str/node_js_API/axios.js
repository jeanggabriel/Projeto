'use trict'
var axios = require('axios');
axios.get('https://localhost:3000');
// Requisições do tipo GET
axios.get('https://localhost:3000/users_login/' + username)
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  

// Requisições POST, note há um parâmetro extra indicando os parâmetros da requisição
axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
  .then(function(response){
    console.log('salvo com sucesso')
  });  
// Requisições serão executadas em paralelo...
axios.all([
    axios.get('https://localhost:3000/users_login')
    axios.get('https://localhost:3000/users_carga')
    axios.get('https://localhost:3000/users_caminhao')
  ]);
  .then(axios.spread(function (userResponse, reposResponse) {
    //... mas este callback será executada apenas quando todas as requisições concluírem
    console.log('User', userResponse.data);
    console.log('Repositories', reposResponse.data);
  }));