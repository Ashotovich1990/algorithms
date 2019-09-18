var findLHS = function(nums) {
    let count = {};
    let res = 0;
    
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;
        if (count[nums[i]+1]) res = Math.max(res,count[nums[i]] + count[nums[i]+1]);
        if (count[nums[i]-1]) res = Math.max(res,count[nums[i]] + count[nums[i]-1]);
    };
    
    return res;
};