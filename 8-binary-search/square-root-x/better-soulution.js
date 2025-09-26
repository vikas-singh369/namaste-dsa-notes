/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) {
        return x;
    }

    let left = 2;
    let right = Math.trunc(x / 2);

    while (left <= right) {

        let m = left + Math.floor((right - left) / 2);

        if (m ** 2 === x) {
            return m
        } else if (m ** 2 > x) {
            right = m - 1;
        } else {
            left = m + 1;
        }
    }

    return right;
};