var url = require('url')
var db = require('./db.js');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/plain"
};

exports.handler = function(request, response) {

  var sendResponse = function(statusCode, response, data){ // request?
    response.writeHead(statusCode, headers);
    response.end(data);
  };

  var getHandler = function(request, response){
    //request list of messages
    //use db helper to request list of messages
      //
      //send response with all messages
  };

  var postHandler = function(request, response){
    //data of response will be the stringified object
    var rb = '';
    request.on('data', function(d){
      rb += d;
    });

    request.on('end', function(){
      var message = JSON.parse(rb);
      var timestamp = new Date(); //check format
      //add user to database
      db.addUser(message.username, function(err, U_ID){
        if( err ) throw err;
        console.log('U_ID', U_ID, 'successfully stored.')
        db.addMessage(message.text, timestamp, U_ID, function(err, M_ID){
          if( err ) throw err;
          console.log('M_ID', M_ID, 'successfully stored.')
        });
      });
      //future: add roomname to database
      // db.addRoom(message.roomname);
    });
  };

  var sendOptions = function(request, response){
    sendResponse(200, response, null);
  };

  var send404 = function(request, response){
    sendResponse(404, response, 'Location not found.');
  };

  //parse URL
  var path = url.parse(request.url).pathname;

  var routerMethod = {
    'GET': getHandler,
    'POST': postHandler,
    'OPTIONS': sendOptions
  };

  var routerPath = {
    '/classes/messages': true
    // also could do rooms and users
  };

  console.log(request.url, path);

  if( routerMethod[request.method] && routerPath[path] ){
    routerMethod[request.method](request, response);
  }else{
    send404(request, response);
  }

};

//if GET request
   //if url is "/", then serve 'client/index.html' and associated files
    //serve '/client' + whatever is requested

//TO DO for data GET
// list of messages
// additional: list of rooms
// additional: list of users in a room
// additional: list of user's friends

//TO DO for data POST
//check user and return friends






  //not in use; good for file serving functionality
  // var setHeaders = function(filename) {
  //   var contentTypes = {
  //     html: 'text/html',
  //     css: 'text/css',
  //     js: 'text/javascript'
  //   };

  //   //parse extension of filename
  //   var extension = filename.split('.');
  //   extension = extension[extension.length-1];

  //   //if extension is in contentTypes, set the contentType header
  //   if (contentTypes[extension]) {
  //     headers['Content-Type'] = contentTypes[extension];
  //   } else {
  //     //else make it "text/plain"
  //     headers['Content-Type'] = 'text/plain';
  //   }
  // };
