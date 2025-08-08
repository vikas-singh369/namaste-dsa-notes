## Approach for adding node in HEAD , TAIL and Index

### `addAtHead(val)` 

1. creating a new Node instance using `new Node` ;
2. my newNode point to the `this.head` node, then i change the new head pointer to my new node.
3. increase the size of linked list;

4. corner case : - if `this.head === null` don't to that newNode.next thing directly assign node to head.

```
let newNode = new Node(val);

if(!this.head){
  this.head  = newNode;
}else{
  newNode.next = this.head;
  this.head = newNode;
}
size++
```

### `addAtTail(val)`

1. create new node.
2. reach the last node of the list so i can add newNode into it.
3. increse size of linked list.

```
newNode;
current = this.head;

while(current.next){
  current = current.next
}
current.next = newNode 

```
corner case 
```
if(!this.head){
  this.head = newNode;
}
```

### `addAtIndex(index, val)`

1. create a new node;
2. reach that given `index-1` value so i can add the new node at the exact given index position. 
3. after reach that index my current index point to the given index node but i want to add that position so i simply say my newNode.next point to the current.next after that i update the current.next to my newNode. 

```
newNode.next = current.next;
current.next = newNode;

```
4. corner case : 
*  set the boundary of linkedlist.

```
if(index < 0 || index > size){
  return ;
}

if(index === size){
  return this.addAtTail(val);
}

if(index === 0){
  return this.addAtHead(val);
}
```
5. increse the size;
