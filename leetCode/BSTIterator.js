/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.root = root;
    this.values = [];
    const inOrder = root => {
        if (!root) return;
        inOrder(root.left);
        this.values.push(root.val);
        inOrder(root.right);
    };
    inOrder(root);
    this.index = 0;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if (this.hasNext()) {
        let res = this.values[this.index];
        this.index++;
        return res;
    };
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return !!this.values[this.index] || this.values[this.index] === 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */