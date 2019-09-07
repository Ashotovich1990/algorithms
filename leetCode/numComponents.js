var numComponents = function(head, G) {
    let res = 0; 
    
    let set = new Set(G);
    let node = head;
    while (node) {
        if (set.has(node.val) && (!node.next || !set.has(node.next.val))) {
            res++;
        };
        node = node.next;
    };
    
    return res;
};