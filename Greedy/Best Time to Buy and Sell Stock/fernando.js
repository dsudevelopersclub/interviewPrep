/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0;
  }
  
  let min = prices[0];
  let maxDif = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      let dif = prices[i] - min;
      maxDif = dif > maxDif ? dif : maxDif;
    }
  }
  
  return maxDif;
};
