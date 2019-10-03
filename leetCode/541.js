var reverseStr = function(s, k) {
    if (s.length < 2) return s;
    let res = "";
    let i = 0; 
    let len = s.length;
    let z = k;
    
    while (i < len) {
        if (z < k) {
            res += s[i];
            z++;
            i++;
        } else {
            let end = i + k - 1;
            if (end >= len) end = len - 1;
            while (end >= i) {
                res += s[end];
                end--;
                
            }
            z = 0;
            i += k;
        }
    }
    
    return res;
};