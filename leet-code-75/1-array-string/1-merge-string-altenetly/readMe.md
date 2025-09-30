# Merge Strings Alternately 
[Link](https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75)

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r



## Approach: 
Loop through both words together and add characters alternately.
Since strings are immutable in JavaScript, use an array with push() to collect characters.
At the end, join() the array into a string.
If one word has remaining characters, they will be added automatically in the loop.

```
mergeStr = [];

loop( i < word1.length || j< word2.length ){

  if(i < word1.length) {
    push into mergeStr and increase the i value
  }

  if(j < word2.length) {
    push into mergeStr and increase the j value
  }
}

return mergeStr.join("")

```


**[Code](./solution.js)**

### Time and Space Complexity

**Time-complexity :** - O(n)

**Space-Complexity :** - O(n) - due to using extra space.


**By vikas singh**