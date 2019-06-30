function isAnagram($s, $t) {
        if (strlen($s) !== strlen($t)) return false;
        $counter = [];
        
        for ($i = 0; $i < strlen($s); $i++) {
            if (!$counter[$s[$i]]) $counter[$s[$i]] = 0;
            if (!$counter[$t[$i]]) $counter[$t[$i]] = 0;                               
            $counter[$s[$i]]++;
            $counter[$t[$i]]--;
        };
        
        foreach($counter as $value) {
            
            if ($value) return false;
        }
        
        return true;
    }