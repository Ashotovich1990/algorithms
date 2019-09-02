var reorderList = function(head) {
    if (!head || !head.next ) return head;
    let first = head;
    let second = findMid(head);
    
    let queue = []; 
    while (first !== second) {
        queue.push(first);
        first = first.next;
    };
    
    let stack = [];
    while (second) {
        stack.push(second);
        second = second.next;
    };
    
    let node = queue.shift();
    let prev;
    while (node) {
        node.next = stack.pop();
        node = node.next;
        node.next = queue.shift();
        prev = node;
        node = node.next;
    };
    prev.next = stack.pop();
    if (prev.next) prev.next.next = null;
    return head;
    
};

const findMid = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };
    return slow;
}