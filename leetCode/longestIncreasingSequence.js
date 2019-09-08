var lengthOfLIS = function(nums) {
    let arr = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                arr[i] = Math.max(arr[i], arr[j] + 1);
            };
        }
    }; 
    
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > res) res = arr[i];
    };
    
    return res;
};