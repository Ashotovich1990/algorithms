var rotateRight = function(head, k) {
    if (!head || !head.next || !k) return head;
    let l = length(head);
    let r = k % l;
    if (!r) return head;
    let i = 1;
    let node = head;
    let last = head;
    let prev = null;
    while (last.next || i < l - r) {
        if (i <= l -r) {
            prev = node;
            node = node.next;
        };
        last = last.next;
        i++;
    };