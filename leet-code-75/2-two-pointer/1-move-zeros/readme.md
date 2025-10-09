# Move Zeroes
[link](https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75)

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]


## Approach : 
using two pointer approach first pointer suppose `i =0` check it not zero value and second pointer  `x =0`start with zero if its not zero modified the array with non-zero value after that remaining fill with zeros

```
for ( i ; i< arr.length; i++ ){
  if( arr[i] !==0){
    arr[x] = arr[i]
    x++;
  }
}

for(let j = x ; j< arr.length ; j++){
  arr[j] = 0;
}
```


### Time And Space Complexity

**Time-complexity :** O(n)
**Space-complexity :** O(1) 

**[Code](./solution.js)**

**By vikas singh**