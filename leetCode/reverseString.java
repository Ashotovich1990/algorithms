class Solution {
    public void reverseString(char[] s) {
        int l = s.length-1;
        int i = 0; 
        
        while (i < l) {
            char temp = s[l];
            s[l] = s[i];
            s[i] = temp;
            i++;
            l--;
        };
    }
}