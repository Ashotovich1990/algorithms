function numPairsDivisibleBy60($time) {
        $mod_arr = [];
        $res = 0;
        foreach($time as $song) {
            $mod_arr[$song%60] =  !$mod_arr[$song%60] ? 1 :  $mod_arr[$song%60] + 1;
        }; 
       
        foreach($time as $song) {
          if ($song%60 === 0) {
              $res += floor($mod_arr[0]*($mod_arr[0]-1)/2);
          } else if ($song%60 === 30) {
              $res += floor($mod_arr[30]*($mod_arr[30]-1)/2);
          } else if ($mod_arr[60-$song%60]) {
              $n = $mod_arr[$song%60] * $mod_arr[60-$song%60];
              $res += $n;
          };
            
          $mod_arr[$song%60] = 0; 
          $mod_arr[60-$song%60] = 0; 
       };
       
        return $res;
    }