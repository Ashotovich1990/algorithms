var findMaxAverage = function(nums, k) {
    let res = 0; 
    for (let i = 0; i < k; i++) {
        res += nums[i];
    };
    let avg = res;
    for (let i = 0; i < nums.length-k; i++) {
        avg =  avg - nums[i] + nums[i+k];
        res = Math.max(res,avg);
    }; 
    return res/k;
};