var findMin = function(nums, mid = Math.floor(nums.length/2), start = 0, end = nums.length-1) {
    if (nums[start] <= nums[end]) return nums[0];

    if (nums[mid] < nums[mid-1]) return nums[mid];
    if (nums[mid] > nums[mid+1]) return nums[mid+1]; 
    
    if (nums[mid] < nums[start]) {
        return findMin(nums, Math.floor(mid/2), 0, mid);
    } else {
        return findMin(nums,Math.floor((end + mid)/2), mid, end);
    }; 
};