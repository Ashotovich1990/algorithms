var insertionSortList = function(head) {
    let dummy = new ListNode(-Infinity);
    while (head) {
       let node = dummy;
       while (node) {
           if (head.val >= node.val && (!node.next || head.val <= node.next.val)) {
               let next = node.next;
               node.next = new ListNode(head.val);
               node.next.next = next;
               let nextHead = head.next;
               head.next = null;
               head = nextHead;
               break;
           } else {
               node = node.next;
           }
       }
    };
    return dummy.next;
};