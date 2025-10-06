# First Bad Version
[Link](https://leetcode.com/problems/first-bad-version/description/)

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.


Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.


## Approach :

using binary search , initilizing two pointer left `l = 0` and right `r = n`;

looping until find the first bad version 

calculate the middle value and check based on the given function 

```
if(!isBadVersion(m)){
  l = m+1
}else {
  r = m;
}
```

middle also have chance to first bad thats why included and at the end `r` pointer contain the first bad version.

### Time and space complexity:
**Time-complexity :** O(log n)

**space-complexity :** O(1)  no extra spcae used

**[Code](./solution.js)**

**By vikas singh**
