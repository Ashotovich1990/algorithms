class Solution {
    public int findPeakElement(int[] nums) {
        int mid = nums.length/2;
        int start = 0; 
        int end = nums.length-1;
    
        while (start <= end) {
            if((mid-1 < 0 || nums[mid] > nums[mid-1]) && (mid+1 >= nums.length || nums[mid] > nums[mid+1])) {
                return mid;
            } else if(mid+1 < nums.length && nums[mid] < nums[mid+1]) {
                start = mid+1;
            } else {
                end = mid-1;
            };  
            mid = (start+end)/2;
        }
       
        return end;
    }
}