const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let total = numbers.reduce((total, number) => {
    return total + number;
  }, 0)
  return total;
};

const multiply = function (numbers) {
  let total = numbers.reduce((total, number) => {
    return total * number;
  }, 1)
  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let factorial = 1;
  if (n === 0){
    return factorial;
  }
  for (let i = 1; i <= n; i++) {
      factorial *= i; 
  }
  return factorial;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
