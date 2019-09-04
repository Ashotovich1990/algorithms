const getMinimumDifference = function(root) {
    let prev = root.val; 
    let res;
    
    const traverse = function(root) {
        if (!root) return;
        traverse(root.left); 
        let diff = Math.abs(root.val - prev);
        res = !res || res > diff ? diff : res;
        prev = root.val;  
        traverse(root.right);
    }; 
    
    traverse(root);
    return res;
};