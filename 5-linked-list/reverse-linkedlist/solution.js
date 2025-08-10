/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;
    let current = head;

    while(current){
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }
    head = prev;

    return prev;
};