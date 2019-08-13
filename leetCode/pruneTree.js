var pruneTree = function(root) {
    if (!root) return null; 
    
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    
    return !root.val && !root.left && !root.right ? null : root;
};