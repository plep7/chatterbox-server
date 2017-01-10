var postData = require('./postData');
var fs = require('fs');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var statusCode = 200;
  var body = '';

  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'application/json';

  var urlRegex = /^\/\?username=\w+$/;

  if (request.url === '/index.html' || request.url === "/" || urlRegex.test(request.url)) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    fs.createReadStream('/Users/student/Documents/hrsf53-chatterbox-server/client/index.html').pipe(response);
  } else if (request.url === '/index.js') {
    response.writeHeader(200, {"Content-Type": "text/javascript"});
    fs.createReadStream('/Users/student/Documents/hrsf53-chatterbox-server/client/scripts/refactor.js').pipe(response);
  } else if (request.url === '/styles/styles.css') {
    response.writeHeader(200, {"Content-Type": "text/css"});
    fs.createReadStream('/Users/student/Documents/hrsf53-chatterbox-server/client/styles/styles.css').pipe(response);
  } else if (request.url === '/jquery.js') {
    response.writeHeader(200, {"Content-Type": "text/javascript"});
    fs.createReadStream('/Users/student/Documents/hrsf53-chatterbox-server/client/lib/jquery.js').pipe(response);
  } else {
    request.addListener('data', function(dataChunk) {
      body += dataChunk;
    });

    request.addListener('end', function() {
      if (request.url === '/classes/messages') {
        if (request.method === 'POST') {
          statusCode = 201;

          body = JSON.parse(body);
          body.objectId = postData.length;

          postData.push(body);
          body = { results: [ body ] };
        } else if (request.method === 'GET') {
          statusCode = 200;
          body = { results: postData.map(function(item) { return item; }) };
        } else if (request.method === 'OPTIONS') {
          statusCode = 200;
          body = { results: [] };
        }
      } else {
        statusCode = 404;
      }
      body = JSON.stringify(body);
      response.writeHead(statusCode, headers);

      response.end(body);
    });
  }
};


module.exports.requestHandler = requestHandler;

