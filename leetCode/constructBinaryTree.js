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

// inorder postorder 
const buildTree = function(inorder, postorder) {
    let l = postorder.length-1;
    if (l === -1) return null;
    
    let headVal =  postorder[l];
    let root = new TreeNode(headVal);
  
    let headIdx;
    const findHeadIdx = () => {
        for (let i = 0; i < inorder.length; i++) {
            if (inorder[i] === headVal) return i;
        };
    };
    headIdx = findHeadIdx();
    
    root.left = buildTree(inorder.slice(0,headIdx), postorder.slice(0,headIdx));
    root.right = buildTree(inorder.slice(headIdx+1), postorder.slice(headIdx,l));
    
    return root;
};

// better solution 
const buildTree = function(inorder, postorder, index = postorder.length-1,  start = 0, end = postorder.length-1) {
    if (start > end) return null;
    
    let root = new TreeNode(postorder[index]);
    
    let pos = inorder.indexOf(postorder[index])
     
    root.left = buildTree(inorder, postorder, index - (end - pos) - 1, start, pos - 1);
    root.right = buildTree(inorder, postorder, index - 1, pos + 1, end);

    return root;
};


