# Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

[Link](https://leetcode.com/problems/middle-of-the-linked-list/description/)

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


## Approach 1 
1. traverse the list and store the value of list to the array after completing the traverse just do `array.length / 2` if middle value get it just return the `arr[mid]`.

- **Time Complexity** : - O(n)
- **Space Complexity** : - O(1)

I can do little better

# Approach 2:

1. used to pointer approach first pointer is `slow` and the second pointer is `fast`.

- slow => 1 step at a time 
- fast => 2 step at a time.

when my fast pointer completed the slow pointer at the middle of the list node retrun the node.

2  corner cases:
 - fast value reach the null
 - fast goes 2 step so if at that point only one node can be reamining fast is pointing the that current node then i also don't want move ahead.

```
slow 
fast
while (fast && fast.next){ // its handle the corner case and break the loop
  slow = slow.next;
  fast = fast.next.next;
}

return slow;
```
[Code](./solution.js)

**By vikas singh**