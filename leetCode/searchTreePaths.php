class Solution {

/**
 * @param TreeNode $root
 * @return String[]
 */
function binaryTreePaths($root, $path="") {
    $res = [];
    if (!$root) return $res;
    $path .= strlen($path) ? "->$root->val" : "$root->val";
    if (!$root->left && !$root->right) {
        array_push($res, $path); 
        return $res;
    } else {
        if ($root->left) $res = array_merge($res, $this->binaryTreePaths($root->left,$path));
        if ($root->right) $res = array_merge($res,$this->binaryTreePaths($root->right,$path));
    }
    return $res;
}
}