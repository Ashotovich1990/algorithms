var sortList = function(head) {
    let l = listLength(head);
    if (l <= 1) return head; 
    let node = midNode(head);
    let nextNode = node.next;
    node.next = null; 
    let left = sortList(head);
    let right = sortList(nextNode);
    return merge(left,right);  
 };
 
 const listLength = function(head) {
     let size = 0; 
     let node = head;
     while (node) {
         size++;
         node = node.next;
     }; 
     return size;
 }; 
 
 const midNode = function(head) {
     let l = listLength(head);
     let i = 1;
     let node = head;
     while (i < Math.floor(l/2)) {
         node = node.next;
         i++;
     };
     return node;
 };
 
 const merge = function(node1,node2) {
     let dummy = new ListNode();
     let node = dummy;
     while (node1 && node2) {
         if (node1.val < node2.val) {
             let next = node1.next;
             node.next = node1;
             node1.next = null;
             node1 = next;
             node = node.next;   
         } else {
             let next = node2.next;
             node.next = node2;
             node2.next = null;
             node2 = next;
             node = node.next;
         };
     }; 
     if (node1) {
         node.next = node1; 
         node = node.next;
     };
     
     if (node2) node.next = node2;
   
     return dummy.next;
 }