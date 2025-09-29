/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    
    let left = 1;
    let right = n;

    while( left <= right){
        let m = left + Math.trunc((right-left)/2);

        let res = guess(m);

        if( res === 0){
            return m;
        }else if( res === -1){
            right = m -1;
        }else {
            left = m+1
        }
    }

    return -1
};