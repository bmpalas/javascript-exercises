const sumAll = function(num1, num2) {
  if (num1 < 0 | num2 < 0) {
        return 'ERROR';
    } 
    else if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR';
    }    // first, return ERROR if negative or non-number
    if (num1 >= num2) {
       bigNum = num1;
       smallNum = num2;
    } else {
       bigNum = num2;
       smallNum = num1; 
    } // figure out which number is bigger, and assign variables
    let accumulator = smallNum;
    for (i = smallNum ; i <= bigNum; ++i) {
        accumulator += i;
    }
   
    return (accumulator - 1);
};

// Do not edit below this line
module.exports = sumAll;
