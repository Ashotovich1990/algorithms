var buildTree = function(preorder, inorder) {
    let node = new TreeNode(preorder[0]);
    if (inorder.length === 0) return null;
    if (inorder.length === 1) return node;
    let arr = divideArray(inorder, node.val)
    let left = arr[0];
    let right =  arr[1];
  
    node.left = buildTree(preorder.slice(1), left);
    node.right = buildTree(preorder.slice(1 + left.length), right);
    
    return node;  
};

var divideArray = function(array, value) {
    let left = [];
    let right = []; 
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            left = array.slice(0, i); 
            right = array.slice(i+1);
            break;
        }
    }
    
    return [left, right];
}