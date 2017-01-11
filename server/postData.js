var fs = require('fs');

module.exports = [
  {
    "username": "jdjdjdj",
    "text": "asdfasdf",
    "objectId": 0
  },
  {
    "username": "jdjdjdj",
    "text": "asdfasdfasdf",
    "objectId": 1
  },
  {
    "username": "jdjdjdj",
    "text": "asdfasdfasdfasdf",
    "objectId": 2
  },
  {
    "username": "jdjdjdj",
    "text": "234234234234234",
    "objectId": 3
  },
  {
    "username": "jdjdjdj",
    "text": "asdfasdf",
    "objectId": 4
  },
  {
    "username": "jdjdjdj",
    "text": "asdfasdf234234",
    "objectId": 5
  },
  {
    "username": "jdjdjdj",
    "text": "asdfasdfasdf",
    "objectId": 6
  },
  {
    "username": "jdjdjdj",
    "text": "asdfasdfg",
    "objectId": 7
  },
  {
    "username": "asdfasdfsf23423",
    "text": "asdfasdf",
    "objectId": 8
  },
  {
    "username": "asdfasdfsf23423",
    "text": "234234234",
    "objectId": 9
  },
  {
    "username": "asdfasdfsf23423",
    "text": "sadsafasdf",
    "objectId": 10
  },
  {
    "username": "asdfasdfsf23423",
    "text": "w3465sdgsdfg",
    "objectId": 11
  },
  {
    "username": "asdfasdfsf23423",
    "text": "ldfsagluhiy42367890fdzbn,",
    "objectId": 12
  },
  {
    "username": "kjhsdkjhfkjshdf",
    "text": "23452354567dfgs",
    "objectId": 13
  },
  {
    "username": "testing",
    "text": "asdfasdf",
    "objectId": 14
  },
  {
    "username": "testing",
    "text": "asdfasf",
    "objectId": 15
  }
];

module.exports.superPush = function foo(item) {
  item.objectId = this.length;
  this.push(item);
  fs.writeFile('/Users/student/Documents/hrsf53-chatterbox-server/server/postData.js', 'var fs = require(\'fs\');\n\n' + 'module.exports = ' + (JSON.stringify(this, null, 2) || '[]') + ';\n\n' + 'module.exports.superPush = ' + foo + ';');
};