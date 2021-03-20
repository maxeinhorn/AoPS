// ASSUMPTIONS
  // return the first path found even if there are multiple paths
  // if there is no path, return false


var primeFactorization = function(number) {
  if (number <= 1) throw new Error("Passed number too small.");

  // const primes = {};
  // primesSeen = new Set()

  var result = [];
  var currentNumber = number;
  while(currentNumber > 1) {
    // Object.keys(primes).forEach(prime => {
    //   prime = parseInt(prime);
    //   if (number % prime === 0) {
    //     result.push(prime);
    //     currentNumber = currentNumber / prime;
    //   }
    // })

    for (var i = 2; i <= number; i++) {
      if (currentNumber % i === 0) {
        result.push(i);
        currentNumber = currentNumber / i;
        break;
      }
    }
  }

  return result
}

// primeFactorization(720);

var removeSubset = function(childArray, parentArray) {
  // assumes both arrays are sorted
  // child:  [3,5]
  // parent: [2,2,2,2,3,3,5]

  var parentIndex = 0;
  var parentIndicesToRemove = [];
  var result = [...parentArray];

  for (var i = 0; i < childArray.length; i++) {
    var matchFound = false;
    for (var j = parentIndex; j < parentArray.length; j++) {
      if (childArray[i] === parentArray[j]) {
        parentIndex = j + 1;
        parentIndicesToRemove.push(j);
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      // child array is not subset of parent, return false
      return false;
    }
  }

  parentIndicesToRemove.forEach(index => result[index] = null);
  return result.filter(el => el)
}

function pyramidSolver(targetPrimes, matrixPrimes) {
  // Props: prime factorized versions of args
  // targetPrimes = [2, 2, 2, 2, 3, 3, 5];
  // matrixPrimes = [
  // [[2]]
  // [[2,2],[3]]
  // [[3],[2],[3,2]]
  // [[2], [3,3],[5],[2]]
  // [[2,5],[5],[2],[3,5],[5]]
  // ];


  // Base Cases:
  // if matrix is only tip, and tip primes == target primes
  //    return ""
  var tip = matrixPrimes[0][0];

  if (matrixPrimes.length === 1) {
    if (JSON.stringify(targetPrimes) === JSON.stringify(tip)) return "";
    return false;
  }

  var result = false;
  var newTargetPrimes = removeSubset(tip, targetPrimes);
  if (!newTargetPrimes) return result;

  // matrix[1][0] are our children
  // matrix[1][1] are our children
  var leftChildMatrix = matrixPrimes.slice(1).map(row => row.slice(0, row.length - 1));
  var rightChildMatrix = matrixPrimes.slice(1).map(row => row.slice(1));


  // check for left branch
  var leftResult = pyramidSolver(newTargetPrimes, leftChildMatrix);
  if (leftResult !== false) {
    return "L" + leftResult;
  }

  // check for right branch
  var rightResult = pyramidSolver(newTargetPrimes, rightChildMatrix);
  if (rightResult !== false) {
    return "R" + rightResult;
  }

  return result
}

function main(target, matrix) {
  var targetPrimes = primeFactorization(target);
  var matrixPrimes = matrix.map(row => (
    row.map(number => primeFactorization(number))
  ));

  // return string if there's a path, or false
  return pyramidSolver(targetPrimes, matrixPrimes);
}

// const target = 720;
// const matrix = [
//   [2],
//   [4,3],
//   [3,2,6],
//   [2,9,5,2],
//   [10,5,2,15,5],
// ];

// console.log(main(target, matrix));

module.exports = {calc: main};



