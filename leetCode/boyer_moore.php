function majorityElement($nums) {
        $res = null;
        $count = 0; 
        
        foreach($nums as $num) {
            if ($count === 0) {
                $res = $num; 
                $count = 1;
            } else if ($num === $res) {
                $count++;
            } else {
                $count--;
            }
            
        };
        
        return $res;
    }

<!-- for 2 elements -->

    function majorityElement($nums) {
        $res = []; 
         $res_fin = []; 
        foreach($nums as $num) {
            if (sizeof($res) !== 2) {
                if (!$res[$num]) {
                    $res[$num] = 1;
                } else {
                    $res[$num]++;
                    if ($res[$num] > sizeof($nums)/3) $res_fin[$num] = $num;
                };    
            } else {
                if ($res[$num]) {
                    $res[$num]++;
                } else {
                    foreach($res as $key =>$val) {
                        $res[$key]--;
                        if ($val === 0) {
                            unset($res[$key]);
                            $res[$num] = 1;
                           
                        }
                    };
                }
            };
            
           
        };
       
      
        foreach($res as $key => $val) {
            $val = 0; 
            foreach($nums as $num) {
                if ($key === $num) $val++;
            };
            if ($val > sizeof($nums)/3) $res_fin[$key] = $key;
        };
        
        return $res_fin;
        
    }