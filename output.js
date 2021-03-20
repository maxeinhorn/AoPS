fs = require('fs');
var writer = function(data) {
  fs.writeFileSync('pyramid_output.txt', data, 'utf8');
}

module.exports = {writer: writer};

