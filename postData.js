var fs = require('fs');module.exports = [{"username":"jdjdjdj","text":"12312312424533253","objectId":0}];module.exports.superPush = function foo(item) {
  this.push(item);
  fs.writeFile('/Users/student/Documents/hrsf53-chatterbox-server/postData.js', 'var fs = require(\'fs\');' + 'module.exports = ' + (JSON.stringify(this) || '[]') + ';module.exports.superPush = ' + foo + ';');
};