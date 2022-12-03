const convertToCelsius = function(input) {
  calculation = ((input - 32) * (5/9));
  result = Math.round(calculation);
  return result;
};

const convertToFahrenheit = function() {  
  calculation = (input * (9/5) + 32);
  result = Math.round(calculation);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
