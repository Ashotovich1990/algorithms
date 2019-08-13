var isValidBST = function(root, lower = -Infinity, upper = Infinity) {
    if (!root) return true;
    
    let val = root.val;
    
    if (val <= lower || val >= upper) return false; 
    
    return isValidBST(root.left, lower, val) && isValidBST(root.right, val, upper)
};