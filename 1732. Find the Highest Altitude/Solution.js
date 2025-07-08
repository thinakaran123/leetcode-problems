/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    maxNum=0
    currentNum=0

    for(let i=0;i<gain.length;i++){
        
            currentNum=currentNum+gain[i]
        
        
        maxNum=Math.max(maxNum,currentNum)
    }
    return maxNum
};
