# Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.[link](https://leetcode.com/problems/power-of-two/description/)

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

 

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16


## Approach & concept
- Concept - when we divide any number by 2 reaptadely until it reaches 1.then the number is 2 power.

- using recursive approach to solve this problem;
- base case n===1 then return `true` invalid case: if the given number is odd then `false` and if divide and divide number again and again and my number is `n<1` retur `false`

```
function (n){
if n===1 -> true

else if (n%2) !=0 || n<1 -> false

poweroftwo(n/2);
}
```

## Complexity Analysis
- **Time Complexity:** O(log n) - 
- **Space Complexity:** O(log n) - due to recursive stack.

[Code](./solution.js)

**By vikas singh**