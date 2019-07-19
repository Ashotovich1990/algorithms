function productExceptSelf($nums) {
        $total_prod = 1; 
        $is_zero = false;
        $zero_count = 0;
        foreach($nums as $num) {
            if (!$num) {
                $is_zero = true;
                $zero_count++;
            } else {
                $total_prod *= $num;
            };          
        }; 
        
        $res = []; 
        
        foreach($nums as $num) {
            if ($is_zero) {
                if ($num) array_push($res, 0);
                if (!$num) {
                    if ($zero_count > 1) array_push($res, 0);
                    if ($zero_count <= 1) array_push($res, $total_prod);
                }
            } else {
                $el = floor($total_prod / $num);
                array_push($res, $el);
            };
                      
        }; 
        
        return $res;
    }