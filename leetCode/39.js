var combinationSum = function(c, t) {
    let dp = new Array(t+1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = [];
    }; 
    dp[0] = [[]];
    c.forEach(cand => { 
        for (let num = 1; num <= t; num++) {
            if (cand <= num) {
                let prevComb = num - cand; 
                dp[prevComb].forEach(comb => {
                    let dup = [...comb];
                    dup.push(cand);
                    dp[num].push(dup);
                });
            };
        };  
    });
    return dp[dp.length-1];
};