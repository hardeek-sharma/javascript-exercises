const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  let holder = 1;
  for (;num > 0; num--) {
    holder *= num;
  }
	return holder;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
