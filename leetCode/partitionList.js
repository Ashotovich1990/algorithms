var partition = function(head, x) {
    let queue = [];
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let node = head;
    
    while (node) {
        if (node.val >= x) {
            prev.next = node.next;
            node.next = null;
            queue.push(node);
            node = prev.next;
        } else {
            prev = node;
            node = node.next;
        }
    };
    
    while (queue.length) {
        let node = queue.shift();
        prev.next = node;
        prev = node;
    };
    
    return dummy.next;
};