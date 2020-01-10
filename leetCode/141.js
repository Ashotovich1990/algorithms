var hasCycle = function(head) {
    let fast = head;
    let slow = head; 
     
    while (fast && slow) {
        if (fast.next) {
            fast = fast.next.next;
        } else {
            return false;
        }
        slow = slow.next;
        if (slow === fast) { 
            return true 
        };
    }
     
    return false;
 };