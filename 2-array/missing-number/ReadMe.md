# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. [Link](https://leetcode.com/problems/missing-number/description/)

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]

Output: 2

Explanation:

n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.


## thought process

range already given so simply i calculate the range 0 to given number and loop through the array and calculate the sum of array value then i find the differnce between the first that we calculate and minus the array of sum the difference is our answer.

## Approach 
1. calculate the `n` as the length of the array.

2. calculate the expected sum of the range using formula `n * (n +1 ) /2`

3. calculate given array actual sum.

4 the missing number is `expected sum - ( actual sum)`

```
length = n
expectedSum = n * (n+1) /2
sum = 0

for(i =0 ; i<n; i++){
  sum = sum + i
}

retrun expectedSum - sum
```

## Time Complexity and Space Complexity 
**Time Complexity** : O (n) - loop ones
** space Complexity** : O(1) - no extra space uses

[Code](./solution.js)

**By vikas singh**