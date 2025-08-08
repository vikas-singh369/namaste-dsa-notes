export function Node(val) {
  this.val = val;
  this.next = null;
}

export function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

const node1 = new Node(3);
const node2 = new Node(5);
const node3 = new Node(8);

// creating linked list
const list = new MyLinkedList();
list.head = node1;
list.size = 3;

// connecting all the node
node1.next = node2;
node2.next = node3;

function printValueOfList(currentNode) {
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
}


let currentNode = list.head;

printValueOfList(currentNode);
