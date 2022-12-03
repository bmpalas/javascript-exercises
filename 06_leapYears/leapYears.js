const leapYears = function(year) {
    if ((year % 400) == 0) {
        return true;
    } else if ((year % 100) == 0) {
        return false;
    } else if ((year % 4) == 0) {
        return true;
    } else
    return false;

} 

/*
accept year as input
if year % 100 == 0 false UNLESS year % 400 == 0. 
if year % 4 == 0, AND year
*/

// Do not edit below this line
module.exports = leapYears;
