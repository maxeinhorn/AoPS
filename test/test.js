const assert = require('assert');
const calculator = require('../calculator.js');

const target = 720;
const matrix = [
  [2],
  [4,3],
  [3,2,6],
  [2,9,5,2],
  [10,5,2,15,5],
];

// console.log('HELLO: ', calculator.calc(target, matrix));

describe('Problem', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(calculator.calc(target, matrix), 'LRLL');
    });
  });

  describe('Output maps to working result', function() {
    it('should return true when the products of the path equal the target', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

});

