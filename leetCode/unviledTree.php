class Solution {

/**
 * @param TreeNode $root
 * @return Boolean
 */
function isUnivalTree($root) {
    $value = $root->val; 
    return $this->traverse($root, $value);     
}

 function traverse($root, $val) {
        if (!$root) return true; 
        if ($root->val !== $val) return false; 
        return $this->traverse($root->left, $val) && $this->traverse($root->right, $val);
}
}