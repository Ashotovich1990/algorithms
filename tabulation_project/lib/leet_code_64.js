// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
   let res = [];
    for (let i = 0; i < grid.length; i++) {
        res.push([]);
    }
   
    res[0][0] = grid[0][0]
    for (let i = 1; i < grid[0].length; i++) {
        res[0][i] = res[0][i-1] + grid[0][i]
    }
    for (let i = 1; i < grid.length; i++) {
        res[i][0] = res[i - 1][0] + grid[i][0]
    }
    
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[i].length; j++ ) {
            let optPath = res[i-1][j] < res[i][j-1] ? res[i-1][j] : res[i][j-1]; 
            res[i][j] = optPath + grid[i][j];
        }
    }
    
    return res[res.length -1][res[0].length -1]
    

}