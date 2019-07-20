class Solution {

/**
 * @param Integer[][] $grid
 * @return Integer
 */
function shortestPathBinaryMatrix($grid) {
    $cost_grid = $this->createGrid(sizeof($grid));
    $cost_grid[0][0] = $grid[0][0] === 1 ? -1 : 1;
    
    for ($j = 1; $j < sizeof($grid); $j++) {
        
        if ($grid[0][$j] === 1) {
                $cost_grid[0][$j] = -1;
        } else {
                $cost_grid[0][$j] = $cost_grid[0][$j - 1] === -1 ? -1 : $cost_grid[0][$j - 1] + 1;
        };
    }; 
    
    for ($i = 1; $i < sizeof($grid); $i++) {
         if ($grid[$i][0] === 1) {
                $cost_grid[$i][0] = -1;
        } else {
                $cost_grid[$i][0] = $cost_grid[$i-1][0] === -1 ? -1 : $cost_grid[$i-1][0] + 1;
        };
    }; 
    
    for ($i = 1; $i < sizeof($grid); $i++) {
        for ($j = 1; $j < sizeof($grid); $j++) {
            if ($grid[$i][$j] === 1) {
                $cost_grid[$i][$j] = -1;
            } else {
                $up = $cost_grid[$i-1][$j] === -1 ? INF : $cost_grid[$i-1][$j] ;
                $left = $cost_grid[$i][$j-1] === -1 ? INF : $cost_grid[$i][$j-1];
                $corner = $cost_grid[$i-1][$j-1] === -1 ? INF : $cost_grid[$i-1][$j-1];
                $res = min($up,$left,$corner); 
                
                $cost_grid[$i][$j] = is_infinite($res) ? -1 : $res + 1;
            };
        }
    }
    
    
    return $cost_grid[sizeof($grid)-1][sizeof($grid)-1];
}

function createGrid($size) {
    $res = []; 
    for ($i = 0; $i < $size; $i++) {
        array_push($res, []);
    }; 
    return $res;
}
}