# Write a function that reverses a string. The input string is given as an array of characters s. [Link](https://leetcode.com/problems/reverse-string/)

You must do this by modifying the input array in-place with O(1) extra memory. 

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]


## Approach
1. My approach is initilize two pointer that contain one is start of the array and second is end of the array.

2. swap the both pointer valuse and reverse the string.

3. move pointers toward each other until they meet at the center. 

``` 
for( i =0; i< s.length /2; i++){
  <!-- swap ( i , (n-1-i)) -->

  let temp = s[i];
  s[i] = s[n-1-i];
  s[n-1-i] = temp;
}
```
## Complexity Analysis
- **Time Complexity:** O(n) - iterates through the array once.
- **Space Complexity:** O(1) - No additional space is used that scales with input size.


[Code](./solution.js)

**By vikas singh**

