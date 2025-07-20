# Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums. [Link](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k. 



## Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

## Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.



## Approach : 
1. My approach is to solve this problem i can maintain two pointer let suppose first pointer `x` that can store the last unquie element position and the second pointer is suppose `i` that itterate the array.

2. if my arr[i] > arr[x] value it's means it is a unique value then just increse my last element position value `x = x+1` then shift the new unique value to this position.

```
x = 0;

for(i=0; i<arr; i++){
  if(arr[i]> arr[x]){
    x = x+1;
    a[x] = a[i]
  }
}

// 3. my x value contain the last unique element position and array value start with 0 index so i simpally increse the last position value with 1 and return.


return x + 1;
```
## Complexity Analysis
- **Time Complexity:** O(n) - iterates through the array once.
- **Space Complexity:** O(1) - No additional space is used that scales with input size.


[Code](./solution.js)

**By vikas singh**