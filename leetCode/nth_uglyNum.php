function nthUglyNumber($n) {
        $res = [1];
        $i1 = 0;
        $i2 = 0;
        $i3 = 0; 
        
        while (sizeof($res) < $n) {
             $op1 = $res[$i1] * 2;
             $op2 = $res[$i2] * 3;
             $op3 = $res[$i3] * 5;
             $next_ugly = min($op1, $op2, $op3); 
             if ($next_ugly === $op1) $i1++;
             if ($next_ugly === $op2) $i2++;
             if ($next_ugly === $op3) $i3++;
            
             array_push($res, $next_ugly);
        }
        
        return $res[$n-1];
    }