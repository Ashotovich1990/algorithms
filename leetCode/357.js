var countNumbersWithUniqueDigits = function(n) {
    let dp = [1];
    let i = 1;
    let prevUniqeNumbers = dp[0];
    let digitsAvailable = 9;
    while (i <= n) {
      if (digitsAvailable < 1) {
          return dp[i-1];
      }
      let nextCount = dp[i-1] * digitsAvailable + prevUniqeNumbers; 
      digitsAvailable--;
      prevUniqeNumbers += nextCount;
      dp.push(nextCount);
      i++;
    }
    return dp[n];
};