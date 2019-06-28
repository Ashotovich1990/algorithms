function backspaceCompare($S, $T) {
        return $this->cleanText($S) === $this->cleanText($T);
    }
    
    function cleanText($s) {
        $stack = [];
        $alp = range("a","z");
        $i = 0;
        while ($i < strlen($s)) {
            if (in_array($s[$i], $alp)) {
                array_push($stack, $s[$i]);
            } else {
                array_pop($stack);
            }
            $i++;
        }
        
        return $stack;
    }