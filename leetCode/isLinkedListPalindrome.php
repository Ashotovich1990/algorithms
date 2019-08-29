class Solution {

/**
 * @param ListNode $head
 * @return Boolean
 */
function isPalindrome($head) {
    $reversed = [];
    $node = $head;
    while ($node) {
       array_unshift($reversed, $node->val); 
       $node = $node->next;
    }; 
    $size = sizeof($reversed);
    for ($i = 0; $i < floor($size/2); $i++) {
        if ($reversed[$size - 1 - $i] !== $reversed[$i]) return false;

    };
    
    return true;
}
}