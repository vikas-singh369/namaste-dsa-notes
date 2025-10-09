# Is Subsequence
[Link](https://leetcode.com/problems/is-subsequence/description/)

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true


## Approach :

approach is very simple checking `s` is subsequnce of `t` or not if checking `s` each char are exist in `t` in sequence if present then true otherwise false.

using two pointer approach initilize two pointer `i = 0` and `j=0`

running a loop until t.length out of bound and checking s value to t if s value match increse the pointer and at the end check pointer reaches s.length equal or not .

```
while( j < t.length ){
  if( s[i] === t[j]){
    ++i;
  }
  j++
}

return i === s.length
```

### Time and Space complexity : 
**Time-complexity :** O (n);
**space-complexity :** O(1) 

**[Code](./solution.js)**


**By vikas singh**