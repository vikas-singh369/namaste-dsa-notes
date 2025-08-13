//Approach 1. convert and check 


/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let list = [];
    let curr = head;

    while(curr){
        list.push(curr.val);

        curr = curr.next
    }

    let mid = Math.floor(list.length / 2)
    let n = list.length;

    for(let i = 0 ; i< mid; i++){
        if(list[i] !=list[n-i-1]){
            return false
        }
    }
    return true;
};