/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let numToChange = digits.length -1;
    
    while(numToChange > -1 && digits[numToChange] == 9) {
        digits[numToChange] = 0;
        numToChange--;
    }
    if(numToChange == -1) {
        digits.unshift(1);
    } else {
        digits[numToChange]++;    
    }
    
    return digits;
};