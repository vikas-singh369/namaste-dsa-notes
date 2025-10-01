# Greatest Common Divisor of Strings 
[Link](https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75)

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"


## Approach : 

my approach is First, check if `str1 + str2` equals `str2 + str1`. If not, there’s no common divisor string.

If they match, find the gcd of the lengths of str1 and str2.

The substring of `str1` with that gcd `length` is the answer. 


### Time and space Complexity 

**Time-complexity:** O( n )

**Space -complexity** : O(1) no extra space used

**[Code](./solution.js)**

**By vikas singh**