function isPowerOfFour($num) {
        if (!$num) return false;
        if ($num === 1) return true;
        while ($num >= 4) {
            $num /= 4;
        }
        return $num === 1;
    }