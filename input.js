// take in a .txt file
// output the data structure that I need for calculator to work
// output the target value

fs = require('fs');

var file = '/Users/maxeinhorn/coding/AoPS/pyramid_sample_input.txt';

// fs.readFile(file, 'utf8', function(err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   var lines = data.split('\r\n');
//   var targetString = lines[0].split(' ')[1];
//   var targetNumber = parseInt(targetString);

//   var matrixArrays = [];
//   var finalMatrix = [];
//   for (var i = 1; i < lines.length; i++) {
//     matrixArrays.push(lines[i]);
//   }
//   matrixArrays.pop();
//   for (var j = 0; j < matrixArrays.length; j++) {
//     var row = [];
//     var arrayify = matrixArrays[j].split(',');
//     finalMatrix.push(arrayify);
//   }
//   for (var k = 0; k < finalMatrix.length; k++) {
//     for (var l = 0; l < finalMatrix[k].length; l++) {
//       finalMatrix[k][l] = parseInt(finalMatrix[k][l]);
//     }
//   }
//   // console.log('finalMatrix: ', finalMatrix);
//   // console.log('targetNumber: ', targetNumber);
// })

var getData = function(filePath) {
  var data = fs.readFileSync(filePath, 'utf8');
  return data;
}

var getTarget = function(data) {
  var lines = data.split('\r\n');
  var targetString = lines[0].split(' ')[1];
  var targetNum = parseInt(targetString);
  // console.log('targetNum: ', targetNum)
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
  // console.log('finalMatrix: ', finalMatrix);
  // console.log('targetNumber: ', targetNumber);
  return finalMatrix;
}

var data = getData(file);
var target = getTarget(data);
// console.log('TARGET: ', target);
var matrix = getMatrix(data);
// console.log('MATRIX: ', matrix);

// var matrix = getMatrix();

module.exports = {target: target, matrix: matrix}