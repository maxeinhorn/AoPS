// take in a .txt file
// output the data structure that I need for calculator to work
// output the target value

fs = require('fs');

var file = '/Users/maxeinhorn/coding/AoPS/pyramid_sample_input.txt';

fs.readFile(file, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  // console.log(data);
  var lines = data.split('\r\n');
  var targetString = lines[0].split(' ')[1];
  var targetNumber = parseInt(targetString);

  var matrixArrays = [];
  var finalMatrix = [];
  // console.log('lines: ', lines);
  for (var i = 1; i < lines.length; i++) {
    matrixArrays.push(lines[i]);
  }
  matrixArrays.pop();
  for (var j = 0; j < matrixArrays.length; j++) {
    var row = [];
    console.log('matrixArrays[j]: ', matrixArrays[j]);
    var arrayify = matrixArrays[j].split(',');
    finalMatrix.push(arrayify);
  }
  for (var k = 0; k < finalMatrix.length; k++) {
    for (var l = 0; l < finalMatrix[k].length; l++) {
      // console.log(finalMatrix[k][l]);
      finalMatrix[k][l] = parseInt(finalMatrix[k][l]);
    }
  }
  console.log('matrixArrays: ', matrixArrays);
  console.log('finalMatrix: ', finalMatrix);
  // console.log('targetNumber: ', targetNumber);
})