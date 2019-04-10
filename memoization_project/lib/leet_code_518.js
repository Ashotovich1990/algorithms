// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function countChange(a,c, memo) {
    if (a === 0) return 0;
    if (c.length === 0) return null; 
    if (c[0] > a) return null;
    if ( a % c[c.length - 1] === 0) memo[0]++;
    let res
    if (memo[ a % c[c.length - 1]]) {
        res += memo[ a % c[c.length - 1]]
    } else {
        res = countChange( a % c[c.length - 1], c.slice(0, c.length - 1), memo)
    }
    if (res) {
        return memo[a] += res;
    } else {
        return null
    }
    
}

function minChange(coins, amount, memo = {}) {
  let c = []; 
  for (let i = 0; i < coins.length; i++) {
      c.push(coins[i]); 
    for (let a = 0; a <= amount; a++) {
        let newComb = countChange(a, c, memo); 
  
        if (memo[a]) {
            memo[a] += newComb;
        }
    }
  }
  return memo[amount]
}