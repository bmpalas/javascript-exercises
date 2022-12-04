const add = function(num1, num2) {
  return (num1 + num2);	
};

const subtract = function(num1, num2) {
  return (num1 - num2);	
};

const sum = function(input) {
let array = input;
let accumulator = 0;
for (i = 0; i < array.length; i++) {
  accumulator = (accumulator + array[i]);
}
return accumulator;

};

const multiply = function(array) {
  let accumulator = array[0];
  for (i = 1; i < array.length; i++) {
  accumulator = (accumulator * array[i]);
}
return accumulator;
};

const power = function(num1, num2) {
  return (num1 ** num2);	
};
//factorial is number of permutations of arranging a set of numbers
const factorial = function(input) {
  if (input == 0) return 1;
  if (input == 1) return 1;
  let accumulator = input;
  for (i = (input -1); i > 0; --i) {
  accumulator = (accumulator * i);
} 
return accumulator;
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
