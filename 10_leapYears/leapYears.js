const leapYears = function(year) {
  isDivisibleByFour = (year % 4 == 0);
  isCentury = (year % 100 == 0);
  isDivisibleByFourHundred = (year % 400 == 0);

  if (isDivisibleByFour && (!isCentury || isDivisibleByFourHundred)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
