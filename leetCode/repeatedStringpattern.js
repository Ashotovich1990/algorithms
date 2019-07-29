var repeatedSubstringPattern = function(s) {
    let i = 0;
    while (i < s.length - 1) {
        let sub = s.slice(0,i+1);
        let new_str = sub;
        while (new_str.length < s.length) {
          new_str += sub; 
        }; 
        if (new_str === s) return true;
        i++;
    }; 
    
    return false;
};

// class Solution php using KMP {

    /**
     * @param String $s
     * @return Boolean
     */
    function repeatedSubstringPattern($s) {
        $i = 0; 
        $j = 1; 
        $table = [0]; 
        $len = 0;
        while ($j < strlen($s)) {
            if ($s[$i] === $s[$j]) {
                $len++; 
                 $table[$j] = $len;
                 $j++;
                $i++;
            } else {
                if (!$i) {
                    $len = 0;
                    $table[$j] = $len;
                    $j++;
                } else {
                    if ($i) $i = $table[$i-1];
                    $len = $i;
                };     
            };
        }; 
        
        if (!$table[strlen($s) - 1]) return false;
        return !(strlen($s) % (strlen($s) - $table[strlen($s) - 1]));
    }
}