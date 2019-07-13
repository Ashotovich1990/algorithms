class Solution {

/**
 * @param Integer[][] $A
 * @return Integer[][]
 */
function flipAndInvertImage($A) {
    $res = [];
    for ($i = 0; $i < sizeof($A); $i++) {
        $row = []; 
        for ($j = sizeof($A[$i]) - 1; $j >=0; $j--) {
            $el = $A[$i][$j] === 1 ? 0 : 1;
            array_push($row, $el);
        };
        array_push($res, $row);
    };
    
    return $res;
}
}