public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int start = 1; 
        int end = n; 
        int mid;  
        while (true) {
            mid = start + (end - start)/2; 
            if (guess(mid) > 0) {
                start = mid + 1; 
            } else if (guess(mid) < 0) {
                end = mid - 1;
            } else {
                return mid;
            }
        }
    }
}