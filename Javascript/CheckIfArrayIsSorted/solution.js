/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

    for(let x=0;x<=nums.length;x++){
        const A=nums.map((val,index)=>{return nums[(index + x)%nums.length]})       
            for(let i=0;i<=A.length;i++){
                if(A[i]>A[i+1]){
                    break
                }else if(i==A.length){
                    console.log(A)
                    return true
                }
            }
    }
    return false
};

console.log(check([1,2,3]))