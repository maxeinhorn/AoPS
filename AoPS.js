var input = [
  [2],
  [4,3],
  [3,2,6]
]

var solver = function(matrix, target) {
  cache = {};
  var recursiveSearch = function()
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] / target === 1 && j === matrix.length - 1) {
        console.log('solved!')
      }
      var key = JSON.stringify(i) + JSON.stringify(j) + JSON.stringify(target);
      if (cache[key] === undefined) {
        cache[key] = matrix[i][j];
      }
    }
  }
  console.log(cache);
}

solver(input);





/*

Input:
Target: 720
2
4,3
3,2,6
2,9,5,2
10,5,2,15,5

Output: LRLL

*/