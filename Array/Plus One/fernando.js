/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;
  for(let i = digits.length - 1; i > -1 ; i--) {
    if (++digits[i] > 9) {
      carry = 1;
      digits[i] = 0;
    } else { 
      carry = 0;
      break;
    }
  }
  
  return carry > 0 ? [carry, ...digits] : digits;
};
