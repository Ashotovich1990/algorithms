var connect = function(root) {
    let queue = []; 
    if (root) queue.push(root);
    
    while (queue.length) {
        let level = queue;
        queue = [];
        while (level.length) {
            let el = level.shift(); 
            if (level[0]) el.next = level[0]; 
            if (el.left) queue.push(el.left);
            if(el.right) queue.push(el.right);
        };
    };
    
    return root;
};