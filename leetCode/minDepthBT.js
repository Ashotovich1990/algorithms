var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1; 
    
    let left =  root.left ? 1 + minDepth(root.left) : Infinity;
    let right = root.right ? 1 + minDepth(root.right) : Infinity;
    
    return Math.min(left,right);
};