/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        // checking left side pair exist
        if (arr[m] === arr[m - 1]) {
            let leftSideCount = m - 1 - l;

            if (leftSideCount % 2 === 1) {
                r = m - 2;
            } else {
                l = m + 1
            }
        }
        // checking the right side pair exist
        else if (arr[m] === arr[m + 1]) {
            let leftSideCount = m - l;

            if (leftSideCount % 2 === 1) {
                r = m - 1;
            } else {
                l = m + 2;
            }
        } else {
            return arr[m]
        }
    }
};