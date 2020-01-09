var minDistance = function(word1, word2) {
    //     the problem is about finding the longest sequence in two strings
    //     as after u can just get the number og chars in both strings to be deleted 
    //     so we need to use dp programing 
        
    //     initialize dp table and fill it with 0 values 
        let dp = new Array()
        for (let j = 0; j <= word1.length; j++) {
            dp.push(new Array(word2.length + 1).fill(0));
        }
       
    //     preform the dp calcuation 
        let i = 1;
        while (i <= word1.length) {
            let j = 1; 
            while (j <= word2.length) {
                if (word1[i-1] === word2[j-1]) {
                    dp[i][j] = Math.max(dp[i-1][j-1] + 1, Math.max(dp[i-1][j], dp[i][j-1]));
                } else {
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
                j++;
            }
            i++;
        }
    
    //     find the number of chars to be deleted in two strings 
        return word1.length + word2.length - (2 * dp[dp.length-1][dp[0].length-1]);
    };