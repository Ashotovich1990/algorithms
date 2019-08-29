var getIntersectionNode = function(headA, headB) {
    let lengthA = listLength(headA);
    let lengthB = listLength(headB);
    let diff = lengthA - lengthB;
    let nodeA = headA;
    let nodeB = headB;
    
    if (diff > 0) {
        while (diff > 0) {
            nodeA = nodeA.next;
            diff--;
        }
    } else {
         while (diff < 0) {
            nodeB = nodeB.next;
            diff++;
        }
    };
  
    while (nodeA && nodeB) {
        if (nodeA === nodeB) return nodeA;
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    };
    
    return null;
};

const listLength = function(head) {
    let res = 0; 
    let node = head;
    while (node) {
        res++;
        node = node.next;
    };
    return res;
}