var minDiffInBST = function(root) {
    let diff = Infinity; 
    let head = root;
    let prev = [];
    
    const traverse = function(root) {
        if (!root) return;
         
        traverse(root.left);
        
        prev.push(root.val);
        let new_diff = prev[prev.length-1] - prev[prev.length-2];
        diff = prev.length > 1 && new_diff < diff ? new_diff : diff;
        if (prev.length > 2) prev.shift();
        
        traverse(root.right);
    };
    
    traverse(root);
    return diff;
};