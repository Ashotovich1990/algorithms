function shortestPathBinaryMatrix($grid) {
        $len = sizeof($grid) - 1;
        $queue = [[0,0]]; 
        $step = 1; 
        
        while (sizeof($queue) > 0) {
            $copy = $queue;
            $queue = [];
            while (sizeof($copy) > 0) {
                $pos = array_shift($copy); 
                if ($pos[0] < 0 || $pos[0] > $len || $pos[1] < 0 || $pos[1] > $len) continue; 
                if ($grid[$pos[0]][$pos[1]] === 1) continue; 
                if ($pos[0] === $len && $pos[1] === $len) return $step;
                
                array_push($queue, [$pos[0]+1,$pos[1]]);
                array_push($queue, [$pos[0]+1,$pos[1]+1]);
                array_push($queue, [$pos[0]+1,$pos[1]-1]);
                array_push($queue, [$pos[0]-1,$pos[1]]);
                array_push($queue, [$pos[0]-1,$pos[1]+1]);
                array_push($queue, [$pos[0]-1,$pos[1]-1]);
                array_push($queue, [$pos[0],$pos[1]+1]);
                array_push($queue, [$pos[0],$pos[1]-1]);
                
                $grid[$pos[0]][$pos[1]] = 1; 
            };
            $step++;
        };
        
        return -1;
    };