# Approach delete value on given index in Linked list

## `deleteAtIndex(index)`

1. suppose provided `index === 0` it means head value then
```
this.head = this.head.next;
```

2. reach that particular `index - 1 ` node so i can unlink the exact node that given by to delete.and after reaching that index my current.next point to the that next that i want to unlink so i simply point the current pointer to `curren.next.next`. 

```
current.next = curren.next.next;
```
4. corner cases:
* set the boundary
* 
```
if(index < 0 || !this.head || index >=this.size){
  return ;
}
```

5. decrease the size of list ;

[Code](./delete-at-index.js)

**By vikas singh**