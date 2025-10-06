# Find First and Last Position of Element in Sorted Array
[Link](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/);

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]


## Approach 

using binary search twice first binary search used to find the strating index if i got the index store that on ans array 0th index and second binary search to find the last index position and store the index in ans array 1th index and return the array.

playing and seaching safe on the right side there is a chance my middle is also at that position so include the middle value in searching space.

```
if( arr[m] < target){
  l = m+1
}else {
  r = m; 
}

if arr[l] === target then store index otherwise no
```

for the last index position playing safe on the left side there is chance my middle is also a last position so included into searching space.

using `ceil` value to find middle element because suppose if only two element remaining at the end every time my middle is oth index so that cause infinite loop because my pointer not going ahead.

```
m = Math.ceil( (l+r)/2);

if( arr[m]> target){
  r = m-1;
}else{
  l = m
}

if( arr[l] === target) then store index otherwise no
```

### Time and Space complexity 

**Time-complexity :** O (log n )
**space-complexity :** O(1)

**[Code](./solution.js)**

one more approach to find first and last index **[Code](./2-approach.js)**

**By vikas singh**