var deleteNode = function(root, key) {
    if (!root) return null; 
    
    if (root.val === key) {
        root = shiftBST(root);
    } else if (root.val > key) {
        root.left = deleteNode(root.left,key);
    } else {
        root.right = deleteNode(root.right,key);
    }; 
    
    return root;
};

const shiftBST = function(root,left) {
    if (!root.left && !root.right) return null;
    if (root.left) {
        let right = root.right;
        let left = root.left;
        root = left;
        let node = root;
        while (node.right) {
            node = node.right;
        }; 
        node.right = right;
    } else {
        root = root.right;
    }
    return root;
}