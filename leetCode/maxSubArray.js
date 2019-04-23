var maxSubArray = function(nums) {
    let res = nums[0]; 
    let sum = nums[0]; 
    for (let i = 1; i < nums.length; i++) {
        sum = nums[i] > nums[i] + sum ? nums[i] : sum + nums[i];
        res = sum > res ? sum : res;
    }
    return res;
};