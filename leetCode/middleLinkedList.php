class Solution {

/**
 * @param ListNode $head
 * @return ListNode
 */
function middleNode($head) {
    $slow = $head;
    $fast = $head;
    while ($fast && $fast->next) {
        $slow = $slow->next; 
        $fast = $fast->next->next;
    };
    return $slow;
}
}