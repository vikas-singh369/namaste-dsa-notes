# Single Element in a Sorted Array
[Link](https://leetcode.com/problems/single-element-in-a-sorted-array/description/)

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10

## Approach 

using binary search to find single element, 

1. find the middle value,

checking the pair if my left side pair exist,
  * then go that side and check is my left side is odd or no
  * if odd then my right pointer moving `r = m-2` because my single element exist this side and i ignore the pair
  * else move to the right side ` l = m+1`

checking if the pari right side exist ,
 * then check it's my left is odd or not 
 * if odd then my right pointer ` r = m-1` else
 * left point `l = m+2`

if pair not exist both side it means this is the single element return it.


```
m = l + (r-l)/2;

if ( arr[m] == arr[m-1]){
  if( (m-1-l) %2 === 1){
    r = m-2;
  }else {
    l = m+1
  }
}else if ( right side ) {
  if ( (m-l)%2 === 1){
    r = m-1;
  }else {
    l = m+2;
  }
}

else {
  return arr[m];
}
```

### Time and Space complexity : 
**Time-complexity :** O (log n);
**space-complexity :** O(1) 

**[Code](./solution.js)**


**By vikas singh**