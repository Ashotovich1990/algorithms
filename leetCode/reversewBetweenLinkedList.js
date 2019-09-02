var reverseBetween = function(head, m, n) {
    let prev = null;
    let node = head;
    let i = 1;
    while (i < m) {
        prev = node;
        node = node.next;
        i++;
    }; 
    let reversed = reverseList(node, n - m + 1);
    if (prev) prev.next = reversed[0];
    reversed[1].next = reversed[2];
    if (m === 1) return reversed[0];
    return head;
};

var reverseList = function(head,n) {
    let node = head; 
    let prev = null;
    let next;
    let i = 0;
    while (i < n) {
        next = node.next;
        node.next = prev; 
        prev = node;
        node = next;
        i++;
    };
    return [prev,head,node];
};