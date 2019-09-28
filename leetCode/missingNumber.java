public int missingNumber(int[] nums) {
        int sum = 0; 
        int sumFull = 0;
        int l = nums.length;
        for (int i = 0; i <= l; i++) {
            if (i < l) sum += nums[i];
            sumFull += i;
        };

        return sumFull - sum;
}