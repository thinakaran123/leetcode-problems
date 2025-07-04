/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum=0.0;

    //first window
    for(let i=0;i<k;i++){
        sum+=nums[i]
    }
let max=sum;
    //moving window
    for(let i=k;i<nums.length;i++){
        sum=sum-nums[i-k]+nums[i]
        max=Math.max(sum,max)
    }

    return max/k;
};
