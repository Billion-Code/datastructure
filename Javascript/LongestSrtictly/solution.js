/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let d=[nums[0]], inc=[nums[0]], dL=iL=1;
    for(let i=1; i<nums.length;i++){
        if(nums[i-1]==nums[i]){
            d=[nums[i]]
            inc=[nums[i]]
            console.log(`in ${nums[i-1]}==${nums[i]} case iL=${iL} and dL=${dL}`)
        }
        if(nums[i-1]<nums[i]){
            d.push(nums[i])
            dL=(dL<d.length)? d.length : dL;
            inc=[nums[i]]
            console.log(`in ${nums[i-1]}<${nums[i]} case iL=${iL} and dL=${dL}`)
            
        }
        else if(nums[i-1]>nums[i]){
            inc.push(nums[i])
            iL=(iL<inc.length)? inc.length : iL;
            d=[nums[i]]
            console.log(`in ${nums[i-1]}>${nums[i]} case iL=${iL} and dL=${dL}`)
        }
    }
    if(dL<=iL){
        return iL
    }else{
        return dL
    }
};

console.log(longestMonotonicSubarray([3,2,1]))