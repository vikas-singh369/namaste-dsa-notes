# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. [Link](https://leetcode.com/problems/remove-element/description/)

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

## Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

## Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100


## Approach 
1. My approach is to solve this problem is i can maintain two pointer first is suppose `x` that can cantain the last position that are not equal to the given `val` and the second pointer is suppose `i` that itterate the array.

2. I just simply check `nums[i] !=val ` if its not equat to then i just shift the value to the `x` position and increse the x value `x = x+1` so x poiting to the next position.

``` 
let x =0;
for(i = 0; i< length; i++){
  if(nums[i] != val){
    nums[x] = nums[i];
    x = x+1
  }
}

// 3. i just return the x value, x value alredy update so i not increse the x value

return x;
```

## Complexity Analysis
- **Time Complexity:** O(n) - iterates through the array once.
- **Space Complexity:** O(1) - No additional space is used that scales with input size.

[Code](./solution.js)

**By vikas singh**

