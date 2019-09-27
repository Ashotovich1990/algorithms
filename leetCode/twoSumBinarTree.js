var hasPathSum = function(root, sum) {
    if (!root) return false; 
    sum -= root.val;
    
    if (!root.left && !root.right) return  sum === 0;
    if (!root.left) return hasPathSum(root.right, sum);
    if (!root.right) return hasPathSum(root.left, sum);
    
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);  
};