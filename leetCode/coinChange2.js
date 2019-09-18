var change = function(amount, coins) {
    const N = coins.length
    
    const DP = Array(amount + 1).fill(0)
    
    DP[0] = 1
    
    for (const coin of coins) {
      for (let col = coin; col <= amount; col++) {
        DP[col] += DP[col - coin]
      }
    }
    
    
    return DP[amount]
  };