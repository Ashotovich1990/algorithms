class Solution {

/**
 * @param Integer[] $nums
 * @return String[]
 */
function summaryRanges($nums) {
    $res = [];
    if (sizeof($nums) < 1) return $res;
    if (sizeof($nums) === 1) return ["$nums[0]"];
    $start = $nums[0];
    $end = $nums[0]; 
    
    for ($i = 0; $i < sizeof($nums) - 1; $i++) {
   
        if ($nums[$i+1] - $nums[$i] === 1) {
            $end = $nums[$i+1];
        } else {
            if ($start === $end) {
                array_push($res, "$start");
            } else {
                array_push($res, "$start->$end");
            }; 
            $start = $nums[$i+1];
            $end = $nums[$i+1];
        };
    }; 
    $last = $nums[sizeof($nums)-1];
    if ($nums[sizeof($nums) - 1] - $nums[sizeof($nums) - 2] === 1) {
        $res[sizeof($res)] = "$start->$last";
    } else {
        array_push($res, "$last");
    }
    
    return $res;
}
}