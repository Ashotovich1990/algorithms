var removeElement = function(nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            let nextEl = i + 1; 
            while (nums[nextEl] === val) {
                nextEl = nextEl + 1;
            }
            
            if (nums[nextEl] || nums[nextEl] === 0) {
                 [nums[i], nums[nextEl]] = [nums[nextEl], nums[i]];
            }    
        }
    };
    
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] !== val) count++; 
    }

    nums = nums.slice(0,count);
    return nums.length;
};