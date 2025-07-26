/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = n * (n +1) / 2;
    let actualSum = 0;

    for(let i =0; i<n; i++){
        actualSum += nums[i];
    } 

    return (expectedSum - actualSum)
};