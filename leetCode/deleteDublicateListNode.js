var deleteDuplicates = function(head) {
    let count = {};
    let node = head;
    while (node) {
        count[node.val] = count[node.val] ? count[node.val] + 1 : 1;
        node = node.next;
    };
    
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    node = head;
    while (node) {
      if (count[node.val] > 1) {
          prev.next = node.next;
          node.next = null;
          node = prev.next;
      } else {
          prev = node;
          node = node.next;
      }
    }
    
    return dummy.next;
};