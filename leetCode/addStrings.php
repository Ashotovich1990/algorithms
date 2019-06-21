function addStrings($num1, $num2) {
        if (!$num1 && !$num2) return "0";
        $i = strlen($num1) - 1;
        $j = strlen($num2) - 1;
        $r = "0"; 
        $res = "";
        while ($i >= 0 || $j >= 0) {
            $n1 = $i >= 0 ? $num1[$i] : 0;
            $n2 = $j >= 0 ? $num2[$j] : 0;
            $s = strval($r + $n1 + $n2);
            $res = strlen($s) === 1 ? $s[0] . $res : $s[1] . $res;
            $r =  strlen($s) === 1 ? "0" : "1";
            $s = 0;
            $i--;
            $j--;
        };
        return $res = $r === "0" ? $res : "1" . $res;
    }