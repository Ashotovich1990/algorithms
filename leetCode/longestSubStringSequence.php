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