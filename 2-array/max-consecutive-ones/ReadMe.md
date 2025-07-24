# Given a binary array nums, return the maximum number of consecutive 1's in the array. [Link](https://leetcode.com/problems/max-consecutive-ones/description/)

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.


## Approach

To find the maximum number of consecutive 1s in the array, I use two variables: `count` to track the current streak, and `maxCount` to store the longest streak found so far.

Iterate through the array nums

If `nums[i] === 1`, increment count

Otherwise, reset `count` to 0

After each update, compare count with `maxCount` and store the larger value in maxCount

```
let count = 0, maxCount = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 1) {
    count++;
    maxCount = Math.max(count, maxCount);
  } else {
    count = 0;
  }
}

return maxCount;
```

## Time Complexity and Space Complexity:

**Time Complexity** : O(n) 

**Space Complexity** : O(1)

[Code](./solution.js)

**By vikas singh**