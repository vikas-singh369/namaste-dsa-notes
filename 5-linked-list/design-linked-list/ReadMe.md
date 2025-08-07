# Problem Statement:
Design and implement a simple singly linked list using basic building blocks like nodes and references (or pointers). The goal is to:

Define a node with a value and a pointer to the next node.
Create individual nodes and link them together to form a list.
Traverse the list from the head and print each node’s value.

## Approach 
1. Define a `Node` using js Function construtor with `val` and `next` pointer.
2. creating a indiviual node ex. node1, node2, node3, node4, node5 etc.
3. connecting each node using `next` pointer like `node1.next = node2`.
4. Define a function constructor that create Linked list with `head` and optional `size`.
5. using Linked list creating a `list` instants that point head value.
6. initilize `currentNode` that pointing to the `head` value.
7. every node pointing to the next node and at the end node point to the null using this knowledge.
8. I loop through the all node using `while` loop and print the value of each node.

```
current = head;

while(current){
  print(current.val);
  current = current.next;
}
```

[Code](./implementationList.js)

**By vikas singh**