# Two Sum
[Link](https://leetcode.com/problems/two-sum/description/)


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


## Appraoch - brute force two pointer 

Loop through each element `i` in the array, and for each `i`, run a nested loop starting from `i + 1` to check every subsequent element. If a pair is found that sums to the target, return their indices.

Time Complexity: O(n²)

Space Complexity: O(1)

This approach works but is inefficient for large inputs.


## Optimal approach using hash map

Traverse the array once and store each value with its index in a hash map. Then, for each element, calculate the complement as `target - currentValue` and check if this complement exists in the map.

Ensure the complement is not the same index as the current element.

If found, return the pair of indices.

Time Complexity: O(n)

Space Complexity: O(n)

```
let map = {
  // suppose all value key value pair
}

for( i = 0; i< arr.length; i++){
  let findPair = target - arr[i];

  if( map[arr[i]] && map[arr[i]] !== i){
    return [i, map[arr[i]]];
  }
}
```

### Time and Space complexity : 
**Time-complexity :** O (n^2);
**space-complexity :** O(1) 

**[Code](./solution.js)**


**By vikas singh**