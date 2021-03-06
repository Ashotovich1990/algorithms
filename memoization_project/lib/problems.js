// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    if (memo[n]) return memo[n];
    if (n === 0) return 2; 
    if (n === 1) return 1; 

    memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo)
    return memo[n]
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function countChange(a,c, memo) {
    if (a === 0) return 0;
    if (c.length === 0) return null; 
    if (c[0] > a) return null;
    if ( a % c[c.length - 1] === 0) return Math.floor(a / c[c.length - 1]);
    let res
    if (memo[ a % c[c.length - 1]]) {
        res = memo[ a % c[c.length - 1]]
    } else {
        res = countChange( a % c[c.length - 1], c.slice(0, c.length - 1), memo)
    }
    if (res) {
        return Math.floor(a / c[c.length - 1]) + res;
    } else {
        return null
    }
    
}

function minChange(coins, amount, memo = {}) {
  let c = []; 
  for (let i = 0; i < coins.length; i++) {
      c.push(coins[i]); 
    for (let a = 0; a <= amount; a++) {
        let newChange = countChange(a, c, memo); 
  
        if (!memo[a] || (memo[a] > newChange && newChange !== 0)) {
            memo[a] = newChange;
        }
    }
  }
  return memo[amount]
}



module.exports = {
    lucasNumberMemo,
    minChange
};

function minChangeRec(coins, amount, memo = {}) {
    if (memo[amount]) return memo[amount];
    if (amount === 0 ) return 0;
    if (coins.length === 0) return 0; 
    if (coins.length === 1) {
        if (coins[0] > amount) return 0; 
    } else if (amount % coins[coins.length -1] === 0) {
        memo[amount] = amount / coins[coins.length -1]
        return memo[amount];
    } else {
       let newChange = amount/coins[coins.length - 1] + minChangeRec(coins.slice(0,coins.length -1), amount % coins[coins.length - 1], memo)
       if (!memo[amount]) {
           memo[amount] = newChange; 
       } else {
           if (newChange < memo[amount]) {
             memo[amount] = newChange;
           }
       }
    }
}