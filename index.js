'use strict';

const http = require("http");
const port = 3000;

const server = http.createServer(function (request, response) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
})

server.listen(port, (err) => {
  if(err) {
    return console.log(err);
  }

  console.log('Server is running on: ', server.address());
});