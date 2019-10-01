const combinationSum = function(c, t) {
    let dp = buildDPTable(t); 
    
    c.forEach(candidate => { 
        for (let num = 1; num <= t; num++) {
            if (candidate <= num) {
                let prevComb = num - candidate; 
                dp[prevComb].forEach(comb => {
                    let dup = [...comb];
                    dup.push(candidate);
                    dp[num].push(dup);
                });
            };
        };  
    });
    
    return dp[dp.length-1];
};

const buildDPTable = function(size) {
    let dp = new Array(size+1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = [];
    }; 
    dp[0] = [[]];
    return dp;
}