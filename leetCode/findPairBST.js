const findTarget = function(root, k) {
    let set = new Set();
    
    const traverse = function(root) {
        if (!root) return false;
        // if (root.val === k) return true;
        if (set.has(root.val)) return true;
        set.add(k-root.val);
        
        return traverse(root.left) || traverse(root.right);
    };
    
    return traverse(root);
};