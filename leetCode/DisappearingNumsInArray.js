var findDisappearedNumbers = function(nums) {
    let res = [];
    let seen = new Array(nums.length).fill(false);

    for (let i = 0; i < nums.length; i++) {
        seen[nums[i]-1] = true;
    };
    
    for (let i = 0; i < seen.length; i++) {
        if (!seen[i]) res.push(i+1);
    };
    
    return res;
};