/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var http = require('http');
// var qs = require('querystring');
var postData = [];

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var statusCode;
  var body = '';

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'application/json';

  request.addListener('data', function(chunk) {
    body += chunk;
  });

  request.addListener('end', function() {
    if (request.url === '/classes/messages') {
      if (request.method === 'POST') {
        statusCode = 201;

        postData.push(body);
        body = { results: [ JSON.parse(body) ] };
      } else if (request.method === 'GET') {
        statusCode = 200;
        body = { results: postData.map(function(item) { return JSON.parse(item); }) };
      } 
    } else {
      statusCode = 404;
    }

    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(body));
  });

};


module.exports.requestHandler = requestHandler;

