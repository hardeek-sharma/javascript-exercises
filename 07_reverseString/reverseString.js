const reverseString = function(string) {
  strArray = string.split(``);
  reversedArray = new Array(string.length);

  let i = 0
  for (letter of strArray) {
    reversedArray[(string.length - 1) - i] = letter; 
    i++;
  }

  return reversedArray.join(``)
};

// Do not edit below this line
module.exports = reverseString;
