class Solution {
    public int peakIndexInMountainArray(int[] A, int... indices) {
        if (A.length < 2) return A[0];
        
        int start = indices.length > 0 ? indices[0] : 0;
        int end = indices.length > 0 ? indices[1] : A.length;
        int mid = (start + end)/2;
        
        if (A[mid-1] < 0 && A[mid] > A[mid+1]) return mid;
        if (A[mid+1] < 0 && A[mid] > A[mid-1]) return mid;
        if (A[mid-1] < A[mid] && A[mid] > A[mid+1]) return mid;
        
        if (A[mid] > A[mid+1]) {
            return peakIndexInMountainArray(A,0,mid);
        } else {
            return peakIndexInMountainArray(A,mid,end);
        }
    }
}