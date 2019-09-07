var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let flag = true;
    while (flag) {
        flag = false;
        let sums = {};
        let sum = 0;
        let node = dummy;
        while (node) {
            sum += node.val;
            if (sums[sum]) {
                sums[sum].next = node.next;
                node.next = null;
                node = sums[sum].next;
                flag = true;
                break;
            } else {
                sums[sum] = node;
                node = node.next;
            };
        };
    };
 
    return dummy.next;
};