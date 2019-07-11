class Solution {

/**
 * @param String $A
 * @param String $B
 * @return Boolean
 */
function buddyStrings($A, $B) {
    if (strlen($A) !== strlen($B)) return false; 
    if ($A === $B) {
        $checked = [];
        for ($i = 0; $i < strlen($A); $i++) {
            if ($checked[$A[$i]]) return true;
            $checked[$A[$i]] = true;
        }
        
        return false;
    }
    $swaped = false;
    for ($i = 0; $i < strlen($A); $i++) {
        if ($A[$i] !== $B[$i]) {
            for ($j = $i + 1; $j < strlen($A); $j++) {
                if ($A[$i] === $A[$j]) next;
                if ( $this->replaceLetter($A, $i, $A[$i], $j, $A[$j]) === $B ) {
                    $swaped = true;       
                }
            }
            break;
        }
    }
    
    return $swaped;
}

function replaceLetter($A, $i, $I, $j, $J) {
    for ($k = 0; $k < strlen($A); $k++) {
        if ($k === $i) $A[$k] = $J; 
        if ($k === $j) $A[$k] = $I;
    }
    return $A;
}
}