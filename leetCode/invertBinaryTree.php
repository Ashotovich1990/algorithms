class Solution {

/**
 * @param TreeNode $root
 * @return TreeNode
 */
function invertTree($root) {
    if (!$root) return null; 
    $left = $root->left; 
    $right = $root->right; 
    $root->left = $this->invertTree($right);
    $root->right = $this->invertTree($left); 
    return $root;
}
}