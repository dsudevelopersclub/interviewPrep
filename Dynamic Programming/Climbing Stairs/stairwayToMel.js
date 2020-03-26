/**
 * @param {number} n
 * @return {number}
 */
var factorialMap = {};

var climbStairs = function(n) {
    let totalWays = 0;
    let total2Steps = Math.floor(n/2);
    let total1Steps = n % 2;

    while(total1Steps < n) {
        totalWays += countPermutations(total2Steps, total1Steps);
        total2Steps--;
        total1Steps += 2;
    }
    
    return ++totalWays;
};

var countPermutations = function(numTwos, numOnes) {
    return factorial(numTwos + numOnes) / (factorial(numTwos) * factorial(numOnes));
}

var factorial = function(num) {
    let mapKey = num;
    let result = 1;
   
    if(factorialMap[mapKey] != null) {
        result = factorialMap[mapKey];
    } else {     
        
        while(num > 0) {
            result *= num;
            num--;
        }

        factorialMap[mapKey] = result;   
    }
    
    return result;
}