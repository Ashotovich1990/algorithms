
// brute force
var combine = function(n, k) {
    let dp = [[]]; 
    
    let z = 1;
    while (z <= k ) {
        let arr = [];
        for (let i = z; i <= n; i++) {
            dp.forEach(comb => {
                if (!comb.length || comb[comb.length-1] < i) {
                    arr.push([...comb,i]);
                }
            })
        }
        z++;
        dp = arr;
    }
   
    return dp;
}