//  * Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let headPoint = new ListNode();
  let curr = headPoint;

  let sum = 0;
  let digit = 0;
  let carry = 0;

  while (l1 || l2 || carry != 0) {
    let l1Value = l1 != null ? l1.val : 0;
    let l2Value = l2 != null ? l2.val : 0;

    sum = l1Value + l2Value + carry;
    digit = sum % 10;
    carry = Math.floor(sum / 10);

    curr.next = new ListNode(digit);
    curr = curr.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return headPoint.next;
};
