class Solution {

/**
 * @param Integer[] $flowerbed
 * @param Integer $n
 * @return Boolean
 */
function canPlaceFlowers($f, $n) {
    $count = 0; 
    
    for ($i = 0; $i < sizeof($f); $i++) {
        if ($this->isFree([$f[$i-1], $f[$i], $f[$i+1]])) {
            $count++;
            $f[$i] = 1;
        };
        if ($count >= $n) return true;
    };
    
    return false;
}

function isFree($arr) {
    for ($i = 0; $i < 3; $i++) {
        if ($arr[$i] === 1) return false;
    };     
    return true;
}
}