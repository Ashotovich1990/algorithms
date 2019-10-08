var findUnsortedSubarray = function(nums) {
    let start = 0
    let end = 0
    let max = 0
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] >= nums[max]) {
            max = i
            if (start === end) { 
                start++
                end++
            }
        } else {
            end = i; 
            while (start > 0 && nums[end] < nums[start-1]) {
                start--;
            }
        }
    }
    
    return start === end ? 0 : end - start + 1; 
};