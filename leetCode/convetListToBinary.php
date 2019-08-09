class Solution {

/**
 * @param ListNode $head
 * @return TreeNode
 */
function sortedListToBST($head) {
    $arr = [];
    $node = $head; 
    while ($node) {
        array_push($arr, $node->val); 
        $node = $node->next;
    };
    
    return $this->builtTree($arr);    
}

function builtTree($arr) {
    if (sizeof($arr) < 1) return null;
    $idx = floor(sizeof($arr)/2); 
    $node = new TreeNode($arr[$idx]);
    $node->left = $this->builtTree(array_slice($arr, 0, $idx));
    $node->right = $this->builtTree(array_slice($arr,$idx + 1));
    return $node;
}
}