# Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


## Approach :
1. my approach is to solve this problem , first i find a `lowest` value and track on it and check all the future day check its give me `maxProfit` or not. 

2. initilize the three variable 1 `lowest` 2 `profit` that check profit every iteration and 3. `maxprofit` and i check if my profit is greater then my profit so i updated it.

```
lowest = prices[i];
profit = 0;
maxProfit = 0;

for(i =1 ; i< length; i++){

  if(a[i]< lowest){
    lowest = a[i];
  }else{
    profit = a[i] - lowest ;
    maxProfit = max(profit, maxProfit);
  }
}

return maxProfit;

```

## Complexity Analysis
- **Time Complexity:** O(n) - iterates through the array once.
- **Space Complexity:** O(1) - No additional space is used that scales with input size.


[Code](./solution.js)

**By vikas singh**