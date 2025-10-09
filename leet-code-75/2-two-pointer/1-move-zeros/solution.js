/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (arr) {
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[x] = arr[i];
            x++;
        }
    }

    for (let j = x; j < arr.length; j++) {
        arr[j] = 0
    }
};