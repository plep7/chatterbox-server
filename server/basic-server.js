var classes = require('./request-handler');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = module.exports = express();
var postData = require('./postData');

app.set('port', 3000);
app.use(express.static(path.join(__dirname, '/../client')));

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('*', function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('access-control-allow-methods', 'OPTIONS, GET, POST, PUT, DELETE');
  res.setHeader('access-control-allow-headers', 'content-type, accept');
  res.setHeader('access-control-max-age', 10); // Seconds.
  next();
});

app.options('*', function(req, res, next) {
  res.send(200);
});

app.use('/classes/messages', classes);

app.listen(app.get('port'));