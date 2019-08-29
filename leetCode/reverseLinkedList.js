var reverseList = function(head) {
    let node = head; 
    let prev = null;
    let next;
    while (node) {
        next = node.next;
        node.next = prev; 
        prev = node;
        node = next;      
    };
    return prev;
};