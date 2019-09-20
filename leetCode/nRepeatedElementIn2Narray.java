class Solution {
    public int repeatedNTimes(int[] A) {
        Set<Integer> seen = new HashSet<Integer>();
        
        for (int i = 0; i < A.length; i++) {
            if (seen.contains(A[i])) return A[i];
            seen.add(A[i]);
        };
        
        throw null;
    }
}