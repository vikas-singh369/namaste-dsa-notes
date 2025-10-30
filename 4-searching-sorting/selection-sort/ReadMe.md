# Selection Sort

## Approach : 

In the selection sort algorithm, we use two nested loops.

The outer loop starts from the first index and represents the current position where the smallest element should be placed.

The inner loop starts from `i + 1` and scans the remaining unsorted portion of the array to find the minimum element.

Once the minimum element is found, we swap it with the element at index `i`.

Repeating this process for each index results in a completely sorted array.


### Time and Space complexity : 

**Time-complexity** : o(n^2) 
** Space-complexity** : O(1);

**[Code](./iterative-approach.js)**


## Optimize version, same algorithm better efficiency 

In previous code i swap every time when i found the smallest element so in optimized way i just Single Swap per Pass.

**[Code](./solution1.js)**


more optimized : if my min value and current index value same then i don't want to swap it so let's optimized it

**[Code](./solution.js)**



**By Vikas singh**