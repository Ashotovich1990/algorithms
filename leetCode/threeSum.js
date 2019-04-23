var threeSum = function(nums) {
    let res = [];
    nums = nums.sort(); 
  
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) return res;
        if (i === 0 || nums[i] != nums[i -1]) {
            let start = i + 1;
            let end = nums.length - 1;
            while (start < end) {
                if (nums[i] + nums[start] + nums[end] === 0) {
                    res.push([nums[i], nums[start], nums[end]])
                    start++;
                    end--;
                    let curEnd = end; 
                    while (nums[end] === nums[curEnd] && start < end) {
                        end--;
                    }
                    let curStart = start; 
                    while (nums[start] === nums[curStart] && start < end) {
                        start++
                    }
                } else if (nums[i] + nums[start] + nums[end] > 0) {
                        end--;
                } else {
              
                        start++;
                }
            }   
        }
    }
    return res;
};