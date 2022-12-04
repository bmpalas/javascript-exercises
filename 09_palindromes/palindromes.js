const palindromes = function (input) {
const punc = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g; //regex of all punctuation
const noPunc = input.replace(punc, ''); //strip punctuation
const noCap = noPunc.toLowerCase();
const stripStr = noCap; // creat stripped string
const arr = stripStr.split('');
const arrRev = arr.reverse();
const strRev = arrRev.join('');

if (strRev == stripStr) {
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
