## Problem Statement
**Problem**: Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise. [Link](https://leetcode.com/problems/palindrome-number/)

E.g., `121` → `true`, `-121` → `false`, `10` → `false`


## Approach
my approach is try reverse the number and compare to the original number.

Handle negative: if x<0 , return false

store original: XCopy to compare

reverse: initilize rev=0, to get last digit mod it x%10 and to add into it rev because it's divide by 10 so i multiply by 10 to manage, add the remender value (rev*10)+2.

```pseudo

while (x > 0)
  rem = x % 10
  rev = (rev * 10) + rem
  x = x / 10
return rev === xCopy
```
[Code](./solution.js)

**by Vikas Singh**

