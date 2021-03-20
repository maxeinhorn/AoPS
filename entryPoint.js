const inputs = require('./input.js');
const calculator = require('./calculator.js');
const output = require('./output.js');

var result = calculator.calc(inputs.target, inputs.matrix);

output.writer(result);