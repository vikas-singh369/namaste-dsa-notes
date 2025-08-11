# Linked List Cycle 
[Link](https://leetcode.com/problems/linked-list-cycle/description/)

Given head, the `head` of a linked list, determine if the linked list has a cycle in it. Return `true` if there is a cycle; otherwise, return `false`.


Input: head = [1,2], pos = 0
Output: true
Input: head = [1], pos = -1
Output: false


# Approach :
1. Traverse the each Linked list if i found the `null` value it means it has no cycle then i return `false`.

2. if it has cycle then, I initilize `SeenNodes` set table that keep track my current not in every iteration and i check if this value already has it means Linked list has cycle so i simply return `true` other wise my  step 1 take care of it.

3. If set `seenNodes` not have value so i add on it and move the list to the next node.

```
seenNode = Set();

while(current){
  if(seenNode.has(current)){
    return true;
  }

  seenNode.add(current);
  current = current.next;
}
return false;
```

## Time and Space Complexity 
**Time Complexity** : O(n) - number of nodes.
**Space Complexity**: O(n) - store every node to check in set.

[Code](./Solution.js)

**By Vikas singh**