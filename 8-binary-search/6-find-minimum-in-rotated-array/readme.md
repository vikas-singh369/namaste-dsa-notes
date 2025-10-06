# Find Minimum in Rotated Sorted Array
[Link](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.



## Approach 

using binary search to achive that time complexity, 
initilize two pointer left `l = 0` and right `r = arr.length -1`,

1. if my array is already sorted then return arr[l] and one more case if any point i got my array sorted then also return the arr[l];

looping the array until they cross each other 

2. find which part is sorted if the sorted part got it menas pivot not possible this side move other side else oppsite the check

```
if( arr[l] <= arr[m]){
  l = M+1;
}else {
  r = m-1
}
```

3. if my middle value is less then privious value so my middle value is pivot point then return the middle value 

```
if( arr[m] < arr[m-1]){
  return arr[m];
}
```


### Time and Space complexity 

**Time-complexity :** O (log n )
**space-complexity :** O(1)

**[Code](./solution.js)**


**By vikas singh**