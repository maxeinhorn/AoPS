// take in a .txt file
// output the data structure that I need for calculator to work
// output the target value

fs = require('fs');

var file = '/Users/maxeinhorn/coding/AoPS/pyramid_sample_input.txt';

fs.readFile(file, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
})