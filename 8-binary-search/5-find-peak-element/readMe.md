# Find Peak Element
[Link](https://leetcode.com/problems/find-peak-element/description/)


A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.


Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.


## Approach : 

using binary seach to find peak element in O(log n) time, 

inilize the two pointer left `l = 0` and right `r = arr.length -1 `, 

looping until my left and right equal and pointing the peak element 

calculating the middle index `m`,

`if(arr[m] < arr[m+1])` means my peak element definetly exist in the right side so 
move the `l = m+1`

else move to the left side and also consider the middle value because my middle value also be a change to the peak element 


### Time and Space complexity 

**Time-complexity :** O (log n )
**space-complexity :** O(1)

**[Code](./solution.js)**


**By vikas singh**