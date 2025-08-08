import { MyLinkedList, Node } from "../implementationList";

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || !this.head || index >= this.size) {
    return -1;
  } else {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.val;
  }
};
