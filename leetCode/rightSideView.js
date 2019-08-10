var rightSideView = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    
    while (queue.length) {
        res.push(queue[0].val);
        let level = queue;
        queue = []; 
        while (level.length) {
            let node = level.shift(); 
            if (node.right) queue.push(node.right);
            if (node.left)  queue.push(node.left);
        };     
    }; 
    
    return res;
};