var maximumProduct = function(nums) {
    let x1 = -Infinity;
    let x2 = -Infinity;
    let x3 = -Infinity;
    let y1 = Infinity;
    let y2 = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= x1) {
            x3 = x2;
            x2 = x1;
            x1 = nums[i];
        } else if (nums[i] >= x2) {
            x3 = x2;
            x2 = nums[i];
        } else if (nums[i] >=x3) {
            x3 = nums[i];
        };
        
        if (nums[i] < y1) {
            y2 = y1;
            y1 = nums[i];
        } else if (nums[i] < y2) {
            y2 = nums[i];
        };
    };
    
    return Math.max(x1*x2*x3, y1*y2*x1);
};