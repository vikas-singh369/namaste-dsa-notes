# Longest Substring Without Repeating Characters 
[Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.


## Approach: 

Using two pointer approach `start` and `j` from sliding window that tract the current substring without repeatating the character.

Hash map to store `most recent index` of each character.

if we encounter the repeatating character with in the current sliding window then move the `start` pointer to just after it's last occurance.

` start = last Occurence + 1`;

at each step , we calculate the window size and update the max Substring window size 



### Time and Space Complexity: 

**Time-complexity:** O(n)

**Space-complexity:** O(1) because all the character , space symbols are constant at time when input size increase but map size is huge not that huge so we say it 

`O(n)`.

**[Code](./solution.js)**

**By vikas singh**