class Solution {
    public void rotate(int[] nums, int k) {
        k = k % nums.length;
        
        while (k > 0) {
            int el = nums[nums.length-1];
            int i = 0; 
            while (i < nums.length) {
                int replace = nums[i];
                nums[i] = el; 
                el = replace;
                i++;
            }
            k--;
        }
    }
}