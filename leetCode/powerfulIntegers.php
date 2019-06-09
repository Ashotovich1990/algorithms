function powerfulIntegers($x, $y, $bound) {
      $res = [];
      if ($bound <= 1) return $res; 
      if ($x === 1 && $y === 1) return [2];
      if ($x === 1 || $y === 1) {
          $z = $x === 1 ? $y : $x;
          for ($i = 0; $z**$i <= $bound; $i++) {
             if ($z**$i + 1 <= $bound) {
                 $res[$z**$i + 1] = $z**$i + 1;
               } 
          }
          return $res;
      };
        
     
      for ($i = 0 ; $x**$i <= $bound; $i++) {
          for ($j =0; $y**$j <= $bound; $j++) {
              if ($y === 1) break;
              if ($x**$i + $y**$j <= $bound) {
                  $res[$x**$i + $y**$j] = $x**$i + $y**$j;
              }
          }
      }
        
      return $res;
    }s