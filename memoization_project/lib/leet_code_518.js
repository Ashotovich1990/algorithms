// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins, memo = {0: 1}) {
    if (amount === 0) return 1;
    if ( !coins.length) return 0;
    let c = []; 
    for (let i = 0; i < coins.length; i++) {
        c.push(coins[i]); 
      for (let a = 0; a <= amount; a++) {
          let newComb = countChange(a, c, memo);
               memo[a] = newComb  
          
      }
    }
    return memo[amount]
  };
  
  function countChange(a,c, memo) { 
      if ( a === 0) return 1; 
      if (c.length === 0) return 0; 
      
      memo[a] = memo[a] ? memo[a] : 0
      let res;
      if (memo[a - c[c.length - 1]]) {
          res = memo[a - c[c.length - 1]]
      } else {
          res = countChange(a - c[c.length - 1], c.slice(0,c.length - 1), memo)
          memo[a - c[c.length - 1]] = res;
      }
      
      return memo[a] + res
  }