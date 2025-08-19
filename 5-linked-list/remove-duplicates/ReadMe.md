# Remove Duplicates from Sorted List
[Link](https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/)

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.



## Approach : 

1. Checking the current node value is equal to current.next.val if equal then unlink the middle one doing this again and again until i find new unique value.

2. if unique value find then only change the current pointer to the new finded unquie node 

3. repeat this process until i reach the last node or my current point not becoming the null.

```
curr = head;

while(curr && curr.next){
  if( curr.val === curr.next.val){
    curr.next = curr.next.next;
  }else{
    curr = curr.next
  }
}

return head;
```

### Time and Space Complexity
**Time-Complexity:** O(n)
**Space-Complexity:** O(1)

[Code](./solution.js)


**By vikas singh**