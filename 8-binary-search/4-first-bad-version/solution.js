
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 0;
        let r = n;

        while (l < r) {
            let m = l + Math.floor((r - l) / 2);

            if (!isBadVersion(m)) {
                l = m + 1;
            } else {
                r = m
            }
        }

        return r
    };
};