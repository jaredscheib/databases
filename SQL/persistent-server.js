//require http helper
var http = require('http');
//require requestHandler
var requestHandler = ('requestHandler');

//define IP
var ip = '127.0.0.1';

//define port
var port = 8080;

//create server
var server = http.createServer(requestHandler);

//server listen
server.listen(ip, port);
