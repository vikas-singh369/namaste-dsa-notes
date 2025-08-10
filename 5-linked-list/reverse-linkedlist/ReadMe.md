# Given the head of a singly linked list, reverse the list, and return the reversed list.

[Link](https://leetcode.com/problems/reverse-linked-list/submissions/1730191960/)


Example: Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]


## Approach 
my approach is to reverse this linked list is store the list next pointer value before updating the current value to prev value.I will explain this through steps

1. initilize `prev` variable that track previous node value and point that initial value of `prev = null`.

2. initilize the `current = head`;

3. loop the value untiil ` cuurent === null`.

4. before update the my `current.next` i will store that value any `temp` variable and update the value so i can trach in the list next node and move forward without losing the link of the list.

```
while(current){
  temp = current.next;
  current.next = prev;
  prev = current;
  current = temp;
}
```

5. At the end when my `temp` and `current` variable point the `null` value and last node pointed or store in the `prev` variable so i simply assign my `head = prev`.


## Time Complexity and Space Complexity
**Time Complexity** : O(n)
**Space Complexity** : O(1);

[Code](./solution.js)

**By Vikas singh**