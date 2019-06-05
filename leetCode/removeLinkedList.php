/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @param Integer $val
     * @return ListNode
     */
    function removeElements($head, $value) {
        $node = $head; 
        $prev_node = new ListNode(0);
        $prev_node->next = $head;
        $new_prev_node = $prev_node;
        while ($node) {
            $temp = $node->next;
            if ($node->val === $value) {
               $new_prev_node->next = $temp;
               $node->next = null;     
            } else {
               $new_prev_node = $node;
            }
            
            $node = $temp;
        }
        
        return $prev_node->next;
    }
}