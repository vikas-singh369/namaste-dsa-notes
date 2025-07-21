/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let maxProfit = 0;
    let lowest = prices[0];

    for(let i = 1; i<prices.length; i++){

        if(prices[i] < lowest){
            lowest = prices[i];
        }else{
            profit = prices[i]-lowest;
            maxProfit = Math.max(profit, maxProfit);
        }
    }
    return maxProfit;
};