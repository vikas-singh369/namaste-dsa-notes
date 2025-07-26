// 1 Approach 

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashTable = {};

    for(let i =0 ; i< nums.length; i++){

        if(!hashTable.hasOwnProperty(nums[i])){
            hashTable[nums[i]] = 1
        }else{
            hashTable[nums[i]] ++
        }
    }

    for( const key in hashTable){
        if(hashTable[key]=== 1){
            return Number(key);
        }
    }

};


// 2 optimal Approach 

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let xor = 0;

for(let i =0 ; i<nums.length; i++){
    xor = xor ^ nums[i];
}

return xor

};