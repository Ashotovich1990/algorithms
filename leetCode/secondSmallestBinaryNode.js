var findSecondMinimumValue = function(root, val = root.val) {
    if (!root) return -1;
    if (val < root.val) return root.val;
    let left = findSecondMinimumValue(root.left, val);
    let right = findSecondMinimumValue(root.right, val);
    if (left === -1 || right === -1) {
        return left === -1 ? right : left;
    } else {
        return Math.min(left,right);
    }
};