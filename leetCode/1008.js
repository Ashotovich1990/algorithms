var bstFromPreorder = function(preorder, start = 0, end = preorder.length-1) {
    if (start > end) return null;

    let newEnd = end
    while (preorder[newEnd] > preorder[start]) {
        newEnd--; 
    }

    let root = new TreeNode(preorder[start]); 

    root.left = bstFromPreorder(preorder, start+1, newEnd); 

    root.right = bstFromPreorder(preorder, newEnd+1, end); 

    return root; 
};
