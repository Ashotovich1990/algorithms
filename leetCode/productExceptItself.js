var productExceptSelf = function(nums) {
    let total_prod = 1;
    let res = []; 
    
    for (let i = 0; i < nums.length; i++) {
        res[i] = total_prod; 
        total_prod *= nums[i];
    }; 
    
    total_prod = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= total_prod; 
        total_prod *= nums[i];
    }; 
    
    return res;
};