var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    let table = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
       table[i] = new Array(s.length).fill(0);
       table[i][i] = 1;
    };
    
    let res = [0,0];
    let max  = 1;
    
    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i + j < s.length; i++ ) {
            if (s[i] === s[i+j]) {
                if (!table[i+1][i+j-1]) {
                    table[i][i+j] = i+1 > i+j-1 ? 2 : 0;
                } else {
                    table[i][i+j] = 2 + table[i+1][i+j-1];
                };             
            } else {
                table[i][i+j] = 0;
            };
            
            if (table[i][i+j] > max) {
                max = table[i][i+j];
                res = [i,i+j];
            }
        };   
    };
    
    return s.substr(res[0],res[1] - res[0] +1);
};