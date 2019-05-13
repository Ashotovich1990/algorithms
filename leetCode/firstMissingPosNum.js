var firstMissingPositive = function(nums) {
    if (!nums.length) return 1;
    let posNums = new Array(nums.length); 
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] > 0
        posNums[nums[i]] = true;
    }
 
    for (let i = 1; i < posNums.length; i++) {
        if (!posNums[i]) return i;
    }
    
    return posNums.length;
};