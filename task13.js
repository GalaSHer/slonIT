const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a,b) => (b !==0 ? a / b : 'на ноль делить нельзя')
};

const calculate = function (num1, num2, operation) {
  return operation(num1, num2)
};

const selectedOperation = 'divide';
console.log(calculate(6, 3, operations[selectedOperation]));