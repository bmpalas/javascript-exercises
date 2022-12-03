const removeFromArray = function(inputArr, ...delArgs) {
    while (delArgs.length > 0) {
    console.log(delArgs);
    let arrVal = delArgs.pop();
    let arrIndex = inputArr.indexOf(arrVal);
    if ((inputArr.includes(arrVal)) == false) break;
    inputArr.splice(arrIndex, 1);
    }  
    return inputArr;
};

/*
first, take the arguments, and create the array. That means it creates an array
from the first set of args, and deletes any additional args from the array.

must be able to:
remove multiple values -- take multiple values via ...rest
loop through for each value in the array created by rest, getting index 
and deleting



gracefully handle values not present in array -- use "in" operator?
able to remove all values in array
works with strings as array elements
removes only same type

*/
// Do not edit below this line
module.exports = removeFromArray;
