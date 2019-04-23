const subarraySum = function(nums, k) {
    let sumMap = {0: 1};
    let sum = 0;
    let res = 0; 
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; 
        res += sumMap[sum - k] || 0;   
        sumMap[sum] = !sumMap[sum] ? 1 : sumMap[sum] += 1;
    }
    return res;
};