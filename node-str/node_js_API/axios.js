var axios = require("axios");

axios({
  method:'get',
  url:'http://localhost:3000/user_carga'
})
.then(dogs => console.log(dogs.data))