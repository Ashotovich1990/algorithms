var findTilt = function(root) {    
    let res = 0; 
    
    const sumNodes = (root) => {
        if (!root) return 0; 
        let left = sumNodes(root.left);
        let right = sumNodes(root.right); 
        
        res += Math.abs(left - right); 
        return root.val + left + right;
    }; 
    
    sumNodes(root); 
    return res;
};