'use trict'
const axios = require('axios');
const port = process.env.PORT || 8080
const app = require("./app");

const server = axios.createServer(app);

server.listen(port, () => {
    console.log('API Ligada e rodando na porta : ' + port);
});
