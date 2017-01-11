var postData = require('./postData');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json({ results: postData });
});

router.post('/', function(req, res) {
  postData.superPush(req.body);
  res.status(201).json({ results: req.body });
});

module.exports = router;