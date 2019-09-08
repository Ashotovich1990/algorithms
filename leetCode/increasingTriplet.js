var increasingTriplet = function(nums) {
    let first = nums[0];
    let second;
    let opt_first;

    for (let i = 0; i < nums.length; i++) {
        if ((first === 0 || first) && (second === 0 || second) && nums[i] > second) {
            return true;
        };
        
        if ((second !== 0 || !second) && nums[i] <= first) first = nums[i];
            
        if ((second !== 0 || !second) && nums[i] > first) second = nums[i]; 
        
        if (!opt_first) {
            if (first && (second === 0 || second) && nums[i] < second) {
                if (nums[i] > first) second = nums[i];
                if (nums[i] < first) opt_first = nums[i];
            } 
        } else {
            if (nums[i] < second && nums[i] > opt_first) {
                second = nums[i];
                first = opt_first;
                opt_first = null;
            }
        }; 
        
    };
    
    return false;
};