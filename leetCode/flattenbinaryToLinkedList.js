var flatten = function(root) {
    if (!root) return null;
    let node = root; 
    let left = root.left ? [root.left] : [];
    let right = root.right ? [root.right] : []; 
    
    while (left.length || right.length) {
        node.right = left[0] ? left[0] : right[0];
        node.left = null;
        
        node = left[0] ? left.shift() : right.shift(); 
        if (node.left) left.push(node.left);
        if (node.right) right.unshift(node.right);  
    }; 
    return root;
};