class Solution {

/**
 * @param String[] $timePoints
 * @return Integer
 */
function findMinDifference($timePoints) {
    sort($timePoints); 
    $size = count($timePoints); 
    $result = $this->timeDiff($timePoints[0], $timePoints[$size - 1]);
    $i = 0; 
    while ($i < $size - 1) {
        $nextDiff = $this->convertTimetoInt($timePoints[$i+1]) - $this->convertTimetoInt($timePoints[$i]);
        if (abs($result) > abs($nextDiff)) {
            $result = $nextDiff;
        };
        if ($result === 0) return 0;
        ++$i;
    };
    return abs($result);
}

function convertTimetoInt($string) {
    return $string === "00:00" ?  60*24 : ($string * 60) + substr($string,3,4);
}

function timeDiff($timeOne, $timeTwo) {
    $counterClock = $this->convertTimetoInt($timeOne) + (60*24 - $this->convertTimetoInt($timeTwo));
    $clockWise = abs($this->convertTimetoInt($timeOne) - $this->convertTimetoInt($timeTwo));
    return $clockWise < $counterClock ?  $clockWise : $counterClock;
}
}