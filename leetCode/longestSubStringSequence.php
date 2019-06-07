function longestPalindromeSubseq($s) {
        $table = []; 
        $table = array_fill(0, strlen($s), []); 
        $k = 0; 
        while ($k < strlen($s)) {
            for ($i = 0; $i + $k < strlen($s); $i++) {
                $j = $i + $k;
                if (!$k) {
                    $table[$i][$j] = 1;
                } elseif ($s[$i] === $s[$j]) {
                    $table[$i][$j] = 2 + $table[$i+1][$j-1];
                } else {
                    $table[$i][$j] = $table[$i+1][$j] >= $table[$i][$j-1] ? $table[$i+1][$j] : $table[$i][$j-1];

                };
            };
            ++$k;
        };
        
        return $table[0][strlen($s) - 1];
        
    }


    function lengthOfLongestSubstring($str) {
        if (strlen($str) < 2) return strlen($str);
        $res = 0; 
        $i = 0; 
        $j = 0; 
        $set = [];
        $l = strlen($str);
        $sub_len = 0;
        while ($i < $l && $j < $l) {
            if (!$set[$str[$j]]) {
                $set[$str[$j]] = true;
                $sub_len++;
                $j++;
            } else {
                $set[$str[$i]] = null;
                $res = $res > $sub_len ? $res : $sub_len;
                $sub_len--;
                $i++;
            }
        }
        return $res = $res > $sub_len ? $res : $sub_len;
    }