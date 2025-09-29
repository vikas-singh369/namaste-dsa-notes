/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

    if (x < 2) return x;

    let res = 0;
    for (let i = 2; i <= x; i++) {
        if ((i ** 2) === x) {
            res = i;
            break;
        } else if ((i ** 2) > x) {
            res = i - 1;
            break;
        }
    }

    return res;

};