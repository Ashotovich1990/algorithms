// Write a function, stepper(nums), that takes in an array of non negative numbers.
// Each element of the array represents the maximum number of steps you can take from that position in the array.
// The function should return a boolean indicating if it is possible to travel from the 
// first position of the array to the last position.
//
// For Example:
//
// Given [3, 1, 0, 5, 10]
//      - We begin at first position, 3. 
//      - Since the element is 3 we can take up to 3 steps from this position.
//      - This means we can step to the 1, 0, or 5
//      - Say we step to 1
//      - Since the element is 1, now the only option is to take 1 step to land on 0
//      - etc...
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// stepper([3, 1, 0, 5, 10]);           // => true, because we can step through elements 3 -> 5 -> 10
// stepper([3, 4, 1, 0, 10]);           // => true, because we can step through elements 3 -> 4 -> 10
// stepper([2, 3, 1, 1, 0, 4, 7, 8])    // => false, there is no way to step to the end
function stepper(nums) {
   let res = new Array(nums.length).fill(false); 
   res[0] = nums[0] > 0 ? true : false;
   for (let i = 0; i < nums.length; i++) {
       if (!res[i]) continue;
       for (let j = i + 1; j <= i + nums[i]; j++) {
           if (nums[j] > 0) res[j] = true;
       }
   }
  return res[res.length - 1];
}


function stepperMemo(nums, idx = 0 , memo = {}) {
   if (memo[idx]) return memo[idx];
   if (!nums.length) return true;
   if (nums[0] >= nums.length - 1) return true; 
   if (nums[0] === 0) return false; 
   let res = false;
   let index = 1
   let pos = nums[0]
   while (pos > 0) {
     if (memo[idx + index] === undefined) {
        memo[idx + index] = stepper(nums.slice(index), idx + index, memo)
     }
     if (memo[idx + index]) res = memo[idx + index];
     index++
     pos--;
   }
   return res;
}


// Write a function, maxNonAdjacentSum(nums), that takes in an array of nonnegative numbers.
// The function should return the maximum sum of elements in the array we can get if we cannot take
// adjacent elements into the sum.
//
// Try to solve this in two ways, using tabulation and memoization.
//
// Examples:
//
// maxNonAdjacentSum([2, 7, 9, 3, 4])   // => 15, because 2 + 9 + 4
// maxNonAdjacentSum([4,2,1,6])         // => 10, because 4 + 6 
function maxNonAdjacentSum(nums) {
    if (!nums.length) return 0; 
    if (nums.length === 1) return nums[0]; 
    let pathOne = nums[0]; 
    let pathTwo = nums[1]; 

    pathOne += maxNonAdjacentSum(nums.slice(2));
    pathTwo += maxNonAdjacentSum(nums.slice(3)); 

    let res = pathOne > pathTwo ? pathOne : pathTwo; 

    return res;
}




// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// You've seen this problem before with memoization, but now solve it using the Tabulation strategy!
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
function minChange(coins, amount) {
   let res = [];
   for (let i = 0; i < coins.length; i ++) {
       res.push([]);
   } 
   coins.sort()
   for (let i = 0; i < coins.length; i++) {
     for (let j = 0; j <= amount; j++) {
        if (i === 0) {
            res[i][j] = Math.floor( j / coins[i]);
            continue;
        }

        if (coins[i] > j) {
            res[i][j] = res[i-1][j];
        } else {
            res[i][j] = Math.min((1 + res[i][j - coins[i]]), res[i-1][j]);
        }
     }
   }

   return res[res.length - 1][res[0].length - 1];

}


module.exports = {
    stepper,
    maxNonAdjacentSum,
    minChange
};