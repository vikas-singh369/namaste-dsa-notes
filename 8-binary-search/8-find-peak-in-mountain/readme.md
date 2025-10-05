# Peak Index in a Mountain Array
[Link](https://leetcode.com/problems/peak-index-in-a-mountain-array/description/)


You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

Return the index of the peak element.

Your task is to solve it in O(log(n)) time complexity.


Example 3:

Input: arr = [0,10,5,2]

Output: 1


## Approach: 

Approach is to achive O (log n) time complexity using binary search, inilizing two pointer `l= 0` and `r= length of array`

looping the array until my `l` and `r` pointer are not equal 

calulate the middle value 

based on the middle value if my middle value is less then next value `arr[m] < arr[m+1]` then move to right side 

else move or we say my searching space is `r =m` because my middle be also a chance to peak.


and the end return the any pointer because both pointing the same value and that value is my peak mountain element.


### Time and Space complexity : 

**Time-complexity :** O (log n);

**space-complexity :** O(1) 

**[Code](./solution.js)**


**By vikas singh**