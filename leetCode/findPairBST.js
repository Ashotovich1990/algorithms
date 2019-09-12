const findTarget = function(root, k) {
    let set = {};
    const traverse = function(root) {
        if (!root) return;
        traverse(root.left);
        set[k - root.val] = root;; 
        traverse(root.right);
    }; 
    
    const findPair = function(root) {
        if (!root) return false;
        if (set[root.val] && set[root.val] !== root) return true;
      
        return findPair(root.left) || findPair(root.right);
    };
    
    traverse(root);
    return findPair(root);
};