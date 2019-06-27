var postorderTraversal = function(root) {
    if (!root) return [];
    let queue = [root];
    let rightStack = [];
    let leftStack = [];
    let res = [];
    while (queue.length) {
        let node = queue[0];
        res.unshift(node.val);
        if (node.right) rightStack.push(node.right);
        if (node.left) leftStack.push(node.left);
        
        if (rightStack.length) {
            queue.push(rightStack[rightStack.length - 1]);
            rightStack.pop();
        } else if (leftStack.length) {
            queue.push(leftStack[leftStack.length - 1]);
            leftStack.pop();
        };
        
        queue.shift();
    };
    return res;
};