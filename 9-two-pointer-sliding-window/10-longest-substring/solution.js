/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let start = 0;
    let maxWs = 0;

    for (let j = 0; j < s.length; j++) {

        if (map.has(s[j]) && map.get(s[j]) >= start) {
            start = map.get(s[j]) + 1;
        }

        map.set(s[j], j);

        let currWs = j - start + 1;

        maxWs = Math.max(currWs, maxWs);
    }

    return maxWs;

};