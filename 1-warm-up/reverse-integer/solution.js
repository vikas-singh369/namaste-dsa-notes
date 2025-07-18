/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let original = x;
    x = Math.abs(x);
    let rev =0;
    let limit = 2**31;
    while(x>0){
        let rem = x%10;
        rev = (rev*10) + rem;
        x = Math.floor(x /10);
    }
    rev = original < 0 ? -rev : rev
    if (rev < -(limit) || rev > limit - 1) return 0;
    return rev;
};