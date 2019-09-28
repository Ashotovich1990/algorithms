var inorderTraversal = function(root) {
    let res = [];

    const traverse = function(root) {
        if (!root) return;
        traverse(root.left);
        res.push(root.val);
        traverse(root.right);
    };
    
    traverse(root);
    return res;
};

var inorderTraversal = function(root) {
    let res = [];
    let stack = []; 
    let node = root;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }; 
        
        node = stack.pop();
        res.push(node.val);
        node = node.right;
    };
    return res;
};