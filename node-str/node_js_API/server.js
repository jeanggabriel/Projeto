const http = require("http");
// const port = process.env.PORT || 8080
http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});
// const app = require("./app");

// const server = http.createServer(app);
// app.use('./app',app);
// server.listen(port, () => {
// //     console.log('API Ligada e rodando na porta : ' + port);
// // });
module.exports = server.js