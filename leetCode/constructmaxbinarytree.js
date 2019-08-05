var constructMaximumBinaryTree = function(nums) {
    if (nums.length < 1) return null; 
    
    let maxIdx = findMax(nums); 
    let node = new TreeNode(nums[maxIdx]); 
    let left = nums.slice(0,maxIdx);
    let right = nums.slice(maxIdx+1);
    
    node.left = constructMaximumBinaryTree(left);
    node.right = constructMaximumBinaryTree(right);
    
    return node;
    
};


var findMax = function(nums) {
    let i = 0; 
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] > nums[i]) i = j; 
    };
    return i;
}