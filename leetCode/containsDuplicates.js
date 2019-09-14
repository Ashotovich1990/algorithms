var containsNearbyDuplicate = function(nums, k) {
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] || hash[nums[i]] === 0) {
            if (i - hash[nums[i]] <= k) return true;
        }; 
        hash[nums[i]] = i;
    }; 
    
    return false;
};