function levelOrder($root) {
        $res = []; 
        $level = []; 
        
        $queue = $root ? [$root] : [];
        $nextLevelQueue= [];
        $node = $root; 
        while (sizeof($queue)) {
            $i = 0;
            $l = sizeof($queue);
            while ($i < $l) {
                $node = $queue[$i];
                array_push($level, $node->val); 
                foreach($node->children as $child) {
                    array_push($nextLevelQueue, $child);
                };
                $i++;
            };
            array_push($res,$level);
            $level = [];
            $queue = $nextLevelQueue;
            $nextLevelQueue = [];
        };
        
        return $res;
    }