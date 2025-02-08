/**
 * Take an array of numbers and return True or False if
 * @param {number[10]} nums
 * @return {boolean}
 */
let isArraySpecial = function(nums) {
    if(nums.length===0){
        return true
    }
    for(let i=0,j=1;i<=(nums.length - 1); i=j++){
        if((nums[i]%2)===(nums[j]%2)){
            return false;
        }
    }
    return true
};
console.log("Test case1: ",isArraySpecial([1]))
console.log("Test case2: ",isArraySpecial([2,1,4]))
console.log("Test case3: ",isArraySpecial([4,3,1,6]))
