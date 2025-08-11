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



# Approach 2 : More optimized way 
To solve this i used floyd's cycle algorithm in floyd's cycle algoritham if there is two pointer which are running in a loop one is slow and other is faster so there is a point where they both pointer meet at same.

1. Initilize two pointer that first pointer takes one step at a time and second pointer takes 2 steps at time.

2. Assign value first pointer `slow = head;` and second pointer `fast = head.next` so that not conflict at the first check of the logic (`slow === fast`).

3. iterate the loop and if `slow === fast` it means cycle exist then i break the loop and return the `true`.

4. otherwise loop reach the null it means cycle not exist return `fasle`.

```
slow = head;
fast = head.next;

while ( fast && fast.next){

  if(slow === fast){
    return true;
  }

  slow = slow.next;
  fast = fast.next.next;
}
return false;
```
5. Corner cases : if list not exist then return `false`;

## Time and Space Complexity 
**Time Complexity** : O(n) - number of nodes.
**Space Complexity**: O(1) - no extra spaced used.

[Code](./Solution2.js)


**By Vikas singh**