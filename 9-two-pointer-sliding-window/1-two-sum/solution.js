// optimal approach

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }

    for (let i = 0; i < arr.length; i++) {
        let pair = target - arr[i];

        if (map.has(pair) && map.get(pair) !== i) {
            return [i, map.get(pair)]
        }

    }

};