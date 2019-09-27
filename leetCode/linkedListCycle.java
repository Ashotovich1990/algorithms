public class Solution {
    public ListNode detectCycle(ListNode head) {
        HashSet<ListNode> seen = new HashSet<ListNode>();
        ListNode node = head;
        
        while (node != null) {
            if (seen.contains(node)) return node;
            seen.add(node);
            node = node.next;
        };
        
        return null;
    };
};