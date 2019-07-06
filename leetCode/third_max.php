class Solution {

/**
 * @param Integer[] $nums
 * @return Integer
 */
function thirdMax($nums) {
   $table = [];
    foreach($nums as $num) {
        $table[$num] = true;
    };
    if (sizeof($table) < 3) return $this->findMax($table);
    for ($i = 0; $i < 3; $i++) {
        $max = $this->findMax($table);
        if (sizeof($table) === 1 || $i === 2) return $max; 
        unset($table[$max]);
    }
    
}

function findMax($nums) {
    $max = -INF; 
    foreach($nums as $num=>$value) {
        if ($num >= $max) $max = $num;
    }  
    return $max;   
}
}