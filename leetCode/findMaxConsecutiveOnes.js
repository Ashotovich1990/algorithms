var findMaxConsecutiveOnes = function(nums) {
    let res = 0;
    let sub = 0;
   
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) sub++;
        if (sub > res) res = sub;
        if (!nums[i]) sub = 0;
    };
    
    return res;
};