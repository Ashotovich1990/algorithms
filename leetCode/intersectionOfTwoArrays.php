function intersection($nums1, $nums2) {
        $res = [];
        $seen = [];
        
        for ($i = 0; $i < sizeof($nums1); $i++) {
            $seen[$nums1[$i]] = true; 
        }; 
        
        for ($i = 0; $i < sizeof($nums2); $i++) {
            if ($seen[$nums2[$i]]) {
                array_push($res, $nums2[$i]);
                $seen[$nums2[$i]] = false;
            }
        }; 
        
        return $res;
    }