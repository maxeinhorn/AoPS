// take in a .txt file
// output the data structure that I need for calculator to work
// output the target value

fs = require('fs');

var file = '/Users/maxeinhorn/coding/AoPS/pyramid_sample_input.txt';

var getData = function(filePath) {
  var data = fs.readFileSync(filePath, 'utf8');
  return data;
}

var getTarget = function(data) {
  var lines = data.split('\r\n');
  var targetString = lines[0].split(' ')[1];
  var targetNum = parseInt(targetString);
  return targetNum;
}

var getMatrix = function(data) {
  var lines = data.split('\r\n');
  var matrixArrays = [];
  var finalMatrix = [];
  for (var i = 1; i < lines.length; i++) {
    matrixArrays.push(lines[i]);
  }
  matrixArrays.pop();
  for (var j = 0; j < matrixArrays.length; j++) {
    var row = [];
    var arrayify = matrixArrays[j].split(',');
    finalMatrix.push(arrayify);
  }
  for (var k = 0; k < finalMatrix.length; k++) {
    for (var l = 0; l < finalMatrix[k].length; l++) {
      finalMatrix[k][l] = parseInt(finalMatrix[k][l]);
    }
  }
  return finalMatrix;
}

var data = getData(file);
var target = getTarget(data);
var matrix = getMatrix(data);

module.exports = {target: target, matrix: matrix}