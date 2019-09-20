function isMonotonic($A) {
        if (sizeof($A) < 2) return true; 
        $direction; 
        
        for ($i = 1; $i < sizeof($A); $i++) {
            if ($A[$i] !== $A[$i-1]) {
                if ($direction) {
                    if ($direction === "increase" && $A[$i] < $A[$i-1]) return false;
                    if ($direction === "decrease" && $A[$i] > $A[$i-1]) return false;
                } else {
                    if ($A[$i] > $A[$i-1]) $direction = "increase";
                    if ($A[$i] < $A[$i-1]) $direction = "decrease";
                };
            };
        };
        
        return true;
    }