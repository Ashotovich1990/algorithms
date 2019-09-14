var isSubtree = function(s, t) {
    const isSame = function(tree,subtree) {
        if (!tree && !subtree) return true;
        if (!tree || !subtree) return false;
        return tree.val === subtree.val && isSame(tree.left, subtree.left) && isSame(tree.right, subtree.right);
    };
    
    return !!s && (isSame(s,t) || isSubtree(s.left,t) || isSubtree(s.right,t));
};