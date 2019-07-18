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