var postorder = function(root) {
    let res = []; 
    
    const traverse = function(root) {
        if (!root) return;
        root.children.forEach(child => {
            traverse(child);
        });
        res.push(root.val);
        return;
    }; 
    
    traverse(root);
    return res;
};