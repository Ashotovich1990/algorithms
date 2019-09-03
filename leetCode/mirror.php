class Solution {

/**
 * @param TreeNode $root
 * @return Boolean
 */
function isSymmetric($root) {
    if (!$root) return true;
    return $this->compare($root->left,$root->right);
    
}

function compare($node1,$node2) {
    if (!$node1 && !$node2) return true;
    if (!$node1 || !$node2) return false;
    if ($node1->val !== $node2->val) return false;
    return $this->compare($node1->left,$node2->right) && $this->compare($node1->right,$node2->left) ;
}


}