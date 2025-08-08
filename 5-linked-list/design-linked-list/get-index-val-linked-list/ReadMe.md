# Approach to get index value in Linked List

### `get(index)`
1. reaching the particular index and send the current.val value;

```
current = this.head;

for( i = 0 ;i < index ; i++){
  current = current.next;
}
current.val;
```

2. corner cases: 
* set the boundary of index value

```
if(index < 0 || index >= size || !this.head){
  return -1;
}
```