var findPairs = function(nums, k) {
    if (k < 0) return 0;
    
    let check = new Set();
    let pair = new Set();
    let res = 0;
    if (!k) {
        for (let i = 0; i < nums.length; i++) {
            if (check.has(nums[i]) && !pair.has(nums[i])) {
                res++;
                pair.add(nums[i]);
            }
            check.add(nums[i]);
        };
        return res;
    };
    
    for (let i = 0; i < nums.length; i++) {
        check.add(nums[i]+k);
    };
    
    for (let i = 0; i < nums.length; i++) {
        if (check.has(nums[i]) && !pair.has(nums[i]+k)) {
            res++;
            pair.add(nums[i]+k);
        }
    };
    
    return res;
};