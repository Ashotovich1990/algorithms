var lowestCommonAncestor = function(root, p, q) { 
    if (!root) return null;
    if (root.val === p.val || root.val === q.val) return root; 
    let x = lowestCommonAncestor(root.left, p, q);
    let y = lowestCommonAncestor(root.right, p, q);
    if (x && y) return root; 
    return x ? x : y;
};