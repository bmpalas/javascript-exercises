const repeatString = function(input, times) {
    let accumulator = input;
    if (times === 0) {return ''}
    else if (times < 0 ) {return('ERROR')}
    else {for (i = 1; i < times; i++) {
          accumulator = accumulator + input;
          }
    }
        return accumulator;
    //that's right, a function is all about what it retuns
};

// Do not edit below this line
module.exports = repeatString;
