<!-- optimal -->
function pivotIndex($nums) {
        $totalSum = 0; 
        foreach($nums as $num) {
            $totalSum += $num;
        }; 
        
        $leftSum = 0; 
        for ($i = 0; $i < sizeof($nums); $i++) {
            if ($totalSum === $leftSum*2 + $nums[$i]) return $i;
            $leftSum += $nums[$i];
        }
        return -1;
    }
<!-- brute force -->
function pivotIndex($nums) {
        $sumArr = array_fill(0, sizeof($nums), 0);
        
        for ($i = 1; $i < sizeof($nums); $i++) {
            $sumArr[$i] = $sumArr[$i-1] + $nums[$i-1];
        };
        
        $prevSum = $nums[sizeof($nums)-1];
        for ($i =  sizeof($nums)-2; $i>=0; $i--) {
            $sumArr[$i] = $sumArr[$i] - $prevSum;
            $prevSum += $nums[$i];
        };
        
        for ($i = 0; $i < sizeof($nums); $i++) {
            if (!$sumArr[$i]) return $i;
        };
        
        return -1;
    }