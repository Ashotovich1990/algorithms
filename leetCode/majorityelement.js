var majorityElement = function(nums) {
    const counter = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (!counter[nums[i]] && counter[nums[i]] !== 0) counter[nums[i]] = 0;
        counter[nums[i]]++;
        if (counter[nums[i]] > nums.length/2) return nums[i];
    }; 
    
};