/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let seenNodes = new Set();
    let current = head;

    while(current){
      if(seenNodes.has(current)){
        return true;
      }
      seenNodes.add(current);
      current = current.next;
    }
    return false;
};