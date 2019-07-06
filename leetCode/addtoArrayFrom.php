function addToArrayForm($A, $K) {
        $i = sizeof($A) - 1;
        $remainder = 0;
        while ($K > 0 || $remainder) {
            if ($i < 0 && !$K) break;
            $digit = $K % 10;
            if ($i < 0) {
                array_unshift($A, 0);
                $i = 0;
            } 
            $A[$i] += $digit + $remainder;
            if ($A[$i] > 9) {
                $remainder = 1; 
                $A[$i] = $A[$i] % 10; 
            } else {
                $remainder = 0;
            }
            
            $K = floor($K/10);
            $i--;
        };
        
        return $res = !$remainder ? $A : array_merge([1], $A);
    }