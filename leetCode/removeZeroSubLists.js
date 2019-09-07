var removeZeroSumSublists = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let flag = true;
    while (flag) {
        flag = false;
        let sums = {};
        sums[0] = dummy;
        let sum = 0;
        let node = dummy.next;
        while (node) {
            sum += node.val;
            if (sums[sum]) {
                sums[sum].next = node.next;
                delete sums[sum];
                flag = true;
            } else {
                sums[sum] = node;
            };
            node = node.next;
        };
    };
 
    return dummy.next;
};