import { Node, MyLinkedList } from "../implementationList";

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);

  if (index < 0 || index > this.size) {
    return;
  } else if (index === 0) {
    return this.addAtHead(val);
  } else if (index === this.size) {
    return this.addAtTail(val);
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }
};
