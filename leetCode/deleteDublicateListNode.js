var deleteDuplicates = function(head) {
    let dummy = new ListNode();
    let removed = new Set();
    dummy.next = head;
    let prev = dummy;
    let node = head;
    
    while (node) {
        if (removed.has(node.val)) {
            while (node && removed.has(node.val)) {
                node = node.next;
                prev.next = node;
            }
        } else if (node.next && node.val === node.next.val) {
            removed.add(node.val);
            prev.next = node.next;
            node.next = null;
            node = prev.next;
        } else {
            prev = node;
            node = node.next;
        };
    };
    
    return dummy.next;
};