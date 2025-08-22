/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let headPoint = new ListNode();

  let curr = headPoint;

  while(l1 && l2){
    if( l1.val < l2.val){
      curr.next = l1;
      l1 = l1.next;
    }else{
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next
  }

  if(!l1) curr.next = l2
  if(!l2) curr.next = l1

  return headPoint.next;
};