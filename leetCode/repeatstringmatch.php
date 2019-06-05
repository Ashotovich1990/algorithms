class Solution {

/**
 * @param String $A
 * @param String $B
 * @return Integer
 */
function repeatedStringMatch($A, $B) {
    $count = 1; 
    $AA = $A;

    while (strlen($AA) < strlen($B)) {
        $AA .= $A;
        $count++;
    }
    
    if (strpos($AA, $B) !== false) return $count; 

    return strpos($AA . $A, $B) !== false ? ++$count : -1;
}
}