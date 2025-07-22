# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. [Link](https://leetcode.com/problems/move-zeroes/)

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]


## Approach :

1. my approach is to solve this problem using two pointer first pointer contains the next postion of the non-zero value and second pointer iterate through the array. when loop end all non zero value placed then i simply filled remaining value with 0

2. initilize `x = 0`;

```
for( i =0 ; i< length ; i++){

  if(nums[i] !== 0){
    nums[x] = nums[i];
    x++;
  }
}

for(i = x ; i< length; i++){
  nums[i] = 0;
}
```

## Time Complexity and Space Complexity
- **Time Complexity:** O(n) - iterates through the array once.
- **Space Complexity:** O(1) - No additional space is used that scales with input size.

[Code](./solution.js)

**By vikas singh**