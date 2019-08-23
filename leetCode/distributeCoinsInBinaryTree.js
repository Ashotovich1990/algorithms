var distributeCoins = function(root) {
    let res = 0; 
    
    const dfs = function(root) {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right); 
        res += Math.abs(left) + Math.abs(right);
        return root.val + left + right - 1;
    };
    dfs(root);
    return res;
    
};
