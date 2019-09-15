var convertBST = function(root) {
    let total = 0;
    
    const sumUp = function(root) {
       if (!root) return;
        sumUp(root.right);
        root.val += total;
        total = root.val;
        sumUp(root.left); 
    };
    
    sumUp(root);
    return root;
};