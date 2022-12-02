const reverseString = function(input) {
    array = [] 
    const strLenth = input.length;
    for (i = 0; i < strLenth; i++) {
        let char = input.charAt(i);
        array.push(char);
    }
    let accumulator = ''
    for (i = (array.length); i > 0; i-- ) {
        let arrayChar = array.pop();
        accumulator += arrayChar;
    }
    return accumulator;

  


    /* 
put string into an array
reverse the array
output the array as a string -- pop each 

*/
};

// Do not edit below this line
module.exports = reverseString;
