//require http helper
var http = require('http');
//require requestHandler
var requestHandler = require('./request-handler.js').handler;

//define IP
var ip = '127.0.0.1';

//define port
var port = 3000;

//create server
var server = http.createServer(requestHandler);

//server listen
server.listen(port, ip);
console.log('Listening on http://' + ip + ':' + port);
