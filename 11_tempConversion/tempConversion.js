const convertToCelsius = function(f) {
  let cel = (f - 32) * (5/9);
  let roundedCel = Math.round(cel * 10) / 10;
  
  return roundedCel;
};

const convertToFahrenheit = function(c) {
  let fah = c * (9/5) + 32;
  let roundedFah = Math.round(fah * 10) / 10;

  return roundedFah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
