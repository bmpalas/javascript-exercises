const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    arrFib = [0,1];
    for (let i = 0; i <= num; i++) {
        let index1 = -2
        let index2 = -1
        arrFib.push((arrFib.at(index1) + arrFib.at(index2)));
    }
  return arrFib.at(num);
};
/* 
loop only needs to go as high as num
for each iteration, add i-1 and i-2? and push to array? or just get the final result // array is better
*/
// Do not edit below this line
module.exports = fibonacci;
