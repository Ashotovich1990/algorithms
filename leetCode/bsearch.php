function search($nums, $target) {
        if (sizeof($nums) === 0) return -1;
        
        $mid = floor(sizeof($nums)/2); 
        
        if ($nums[$mid] === $target) return $mid; 
        if ($nums[$mid] >= $target) return $this->search(array_slice($nums, 0, $mid), $target);
        $res = $this->search(array_slice($nums, $mid+1), $target); 
        
        return $res === -1 ? -1 : 1 + $mid + $res;
    }