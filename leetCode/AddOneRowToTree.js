var addOneRow = function(root, v, d, left = true) {
    if (!root && d === 1) return new TreeNode(v);
    if (!root) return null;
    if (d === 1) {
        let node = new TreeNode(v);
        if (left) {
            node.left = root;
        } else {
            node.right = root;
        };
        return node;
    }; 
    
    root.left =  addOneRow(root.left, v, d-1, true);
    root.right = addOneRow(root.right, v, d-1, false);
    return root;
};