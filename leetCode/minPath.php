class Solution {
<!-- work only for right and down movement -->
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


<!-- DFS approach attempt -->

if (isset($checked[$start[0] . $start[1]])) return $checked[$start[0] . $start[1]];
        if (!isset($grid[$start[0]][$start[1]])) return -1; 
        if ($grid[$start[0]][$start[1]] === 1) return -1;
        if ($start[0] === sizeof($grid) - 1 && $start[1] === sizeof($grid) - 1) return 1;
        
       
        $grid[$start[0]][$start[1]] = 1;
        
        $p1 = INF; 
        $p2 = INF; 
        $p3 = INF; 
        $p4 = INF; 
        $p5 = INF; 
        $p6 = INF;
        $p7 = INF;
        $p8 = INF;
        
        // if (!isset($visited[$start[0] + 1 . $start[1]])) { 
            $p1 = $this->shortestPathBinaryMatrix($grid, [$start[0] + 1, $start[1]], $checked);
            $checked[$start[0] + 1 . $start[1]] = $p1 === -1 ? -1 : 1 + $p1;
            $p1 = $p1 === -1 ? INF : 1 + $p1;
        // };
        
        // if (!isset($visited[$start[0] + 1 . $start[1] - 1])) { 
            $p2 = $this->shortestPathBinaryMatrix($grid, [$start[0] + 1, $start[1] - 1], $checked);
            $checked[$start[0] + 1 . $start[1] - 1] = $p2 === -1 ? -1 : 1 + $p2;
            $p2 = $p2 === -1 ? INF : 1 + $p2;
        // };
        
        // if (!isset($visited[$start[0] + 1 . $start[1] + 1])) { 
            $p3 = $this->shortestPathBinaryMatrix($grid, [$start[0] + 1, $start[1] + 1],  $checked);
            $checked[$start[0] + 1 . $start[1] + 1] = $p3 === -1 ? -1 : 1 + $p3;
            $p3 = $p3 === -1 ? INF : 1 + $p3;
        // };
        
        // if (!isset($visited[$start[0] . $start[1] + 1])) { 
            $p4 = $this->shortestPathBinaryMatrix($grid, [$start[0], $start[1] + 1],  $checked);
            $checked[$start[0] . $start[1] + 1] = $p4 === -1 ? -1 : 1 + $p4;
            $p4 = $p4 === -1 ? INF : 1 + $p4;
        // };
        
        // if (!isset($visited[$start[0] . $start[1] - 1])) { 
            $p5 = $this->shortestPathBinaryMatrix($grid, [$start[0], $start[1] - 1], $checked);
            $checked[$start[0] . $start[1] - 1] = $p5 === -1 ? -1 : 1 + $p5;
            $p5 = $p5 === -1 ? INF : 1 + $p5;
        // };
        
        // if (!isset($visited[$start[0] - 1 . $start[1]])) { 
            $p6 = $this->shortestPathBinaryMatrix($grid, [$start[0] - 1, $start[1]],  $checked);
            $checked[$start[0] - 1 . $start[1]] = $p6 === -1 ? -1 : 1 + $p6;
            $p6 = $p6 === -1 ? INF : 1 + $p6;
        // };
        
        // if (!isset($visited[$start[0] - 1 . $start[1] - 1])) { 
            $p7 = $this->shortestPathBinaryMatrix($grid, [$start[0] - 1, $start[1] - 1], $checked);
            $checked[$start[0] - 1 . $start[1] - 1] = $p7 === -1 ? -1 : 1 + $p7;
            $p7 = $p7 === -1 ? INF : 1 + $p7;
        // };
        
        // if (!isset($visited[$start[0] - 1 . $start[1] + 1])) { 
            $p8 = $this->shortestPathBinaryMatrix($grid, [$start[0] - 1, $start[1] + 1],  $checked);
            $checked[$start[0] - 1 . $start[1] + 1] = $p8 === -1 ? -1 : 1 + $p8;
            $p8 = $p8 === -1 ? INF : 1 + $p8;
        // };
        
        $res = min($p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8); 
        
        return is_infinite($res) ? -1 : $res;
        
    }