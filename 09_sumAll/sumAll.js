const sumAll = function(min, max) {
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    let holder = min;
    min = max;
    max = holder;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
