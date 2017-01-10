var fs = require('fs');

module.exports = [];
module.exports.superPush = function foo(item) {
  this.push(item);
  fs.writeFile('/Users/student/Documents/hrsf53-chatterbox-server/postData.js', 'var fs = require(\'fs\');' + 'module.exports = ' + (JSON.stringify(this) || '[]') + ';module.exports.superPush = ' + foo + ';');
};