# Remove Nth Node From End of List 
[Link](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example: Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]


## Approach : one pass

1. I used a sentinel node approach - basically added a dummy node befor the head so i can handle the head cases and non-head cased with same logic.

2. using two pointer approach first pointer is `first` and second pointer is `second` both initial position is sentinel node. 

first pointer start with nth steps ahead.


the reaseon behind doing this is when we move forward both pointer 1 step at a time then that time when my first pointer reaches the null then my second pointer is nth position at the end it means the desire node that we want to remove in the `second.next` position.

3. remove the desire nth node and return the new head my sentinel pointer the head so simply return sentinel.next;

```
sentinel;
sentinel.next = head;
first = sentinel;

for(i=0; i<n; i++){
  first = first.next;
}

second = sentinel;

while(first.next){
  second = second.next;
  first = first.next;
}

second.next = second.next.next;

return sentinel.next;
```

[Code](./solution.js)


## Time and Space Complexity
**Time-Complexity** O(n)
**Space-Complexity** O(1)

**By vikas singh**