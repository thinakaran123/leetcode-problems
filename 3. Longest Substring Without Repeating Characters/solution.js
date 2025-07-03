/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let checker = new Set();
    let start=0;
    let maxLength=0;

    for(let end=0;end<s.length;end++){
        while(checker.has(s[end])){
            checker.delete(s[start])
            start++;
        }
        checker.add(s[end])
        maxLength=Math.max(maxLength,end-start+1)

       
    }
     return maxLength;
};
