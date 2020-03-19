/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let restOfPrices, currDifference;
    
    for (let i = 0; i < prices.length - 1; i++) {
        if(prices[i+1] && prices[i+1] < prices[i]) {
            continue; // continue until we get to the next smallest buying price
        } else {
            restOfPrices = prices.slice(i).sort((a,b) => a - b);
            currDifference = restOfPrices[restOfPrices.length - 1] - prices[i];
            max = currDifference > max ? currDifference: max;
        }
    }
    
    return max;
};