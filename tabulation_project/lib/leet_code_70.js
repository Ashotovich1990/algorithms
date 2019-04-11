// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n, memo = {0 : 0, 1: 1, 2: 2}) {
   if (memo[n]) return memo[n];

   for (let i = 3; i <= n; i++) {
       if (!memo[i]) {
           memo[i] = climbStairs(i - 1, memo) + climbStairs(i - 2, memo)
       }
   }

   return memo[n];
}