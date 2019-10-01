class Solution {
    public int[] sortArrayByParityII(int[] A) {
        int[] res = new int[A.length];
        int i = 0; 
        int j = 1; 
        
        for (int idx = 0; idx < A.length; idx ++) {
            if (A[idx] % 2 == 0) {
                res[i] = A[idx];
                i += 2;
            } else {
                res[j] = A[idx];
                j += 2;
            }
        };
        
        return res;
    };
};