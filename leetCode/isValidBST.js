var isValidBST = function(root, lower = -Infinity, upper = Infinity) {
    if (!root) return true;
    
    let val = root.val;
    
    if (val <= lower || val >= upper) return false; 
    
    return isValidBST(root.left, lower, val) && isValidBST(root.right, val, upper)
};

var isValidBST = function(root, lower = -Infinity, upper = Infinity) {
    let arr = []; 
    var traverse = function(root) {
        if (!root) return; 
        traverse(root.left); 
        arr.push(root.val);
        traverse(root.right);
    }; 
    
    traverse(root);
    
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] >= arr[i+1]) return false;
    };
    
    return true;
    
};