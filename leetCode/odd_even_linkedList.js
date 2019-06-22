var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    let odd = head;
    let evenHead = head.next;
    let even = head.next;
    let isOdd = true;
    let node = even.next;
    while (node) {
        if (isOdd) {
            odd.next = node;
            odd = odd.next;
            even.next = null;
        } else {
            even.next = node; 
            odd.next = null;
            even = even.next;
        }
        node = node.next;
      isOdd = !isOdd;
    }
    odd.next = evenHead;
    return head;
};