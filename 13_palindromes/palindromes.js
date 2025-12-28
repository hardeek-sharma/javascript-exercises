const palindromes = function(str) {
  let alphanumerical = '1234567890abcdefghijklmnopqrstuvwxyz';

  let cleanStr = str
    .toLowerCase()
    .split('')
    .filter(char => alphanumerical.includes(char))
    .join('');

  let holder = Array(str.length);
  let arr = cleanStr.split('');

  for (i = 0; i < str.length; i++) {
    holder[i] = arr[str.length - i-1];
  }

  return holder.join('') == cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
