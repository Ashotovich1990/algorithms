// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


const isBalanced = function(root) {
    if (!root) return true;
    return isNodeBalacned(root) && isBalanced(root.left) && isBalanced(root.right)
}


const isNodeBalacned = function(root) {
    if (!root) return true; 
    return Math.abs(depth(root.left) - depth(root.right)) <= 1;
}

const depth = function(root) {
    if (!root) return 0; 
    return Math.max(depth(root.left), depth(root.right)) + 1;
}

// master Theorem 
// T(n) = 2T(n/2) + f(n) 
// T(n) =  n * 2 of n