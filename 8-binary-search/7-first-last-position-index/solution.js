/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;
    let ans = [-1, -1];
    // finding the first position index
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m
        }
    }

    if (arr[l] === target) ans[0] = l;

    // finding the last postion index
    l = 0;
    r = arr.length - 1;

    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);

        if (arr[m] > target) {
            r = m - 1;
        } else {
            l = m
        }
    }

    if (arr[l] === target) ans[1] = l;

    return ans;
};