class Solution {
    func swapPairs(_ head: ListNode?) -> ListNode? {
        var dummy = ListNode(0);
        var start = dummy
        if var node = head {
            start.next = node
            while true {
                if var next = node.next {
                    var tail = next.next
                    next.next = node
                    start.next = next  
                    node.next = tail 
                    start = node
                    if var newNode = tail {
                        node = newNode
                    } else {
                        break
                    }
                } else {
                    break
                }
            }
        }
        
        return dummy.next
    }
}