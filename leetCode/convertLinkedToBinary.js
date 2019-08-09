const sortedListToBST = function(head) {
    let size = findSize(head);
   
    const builtTree = (start,end) => {
        
        if (start > end) return null; 
        let mid = Math.floor((start+end)/2);
        
        let left = builtTree(start, mid-1); 
        
        let node = new TreeNode(head.val); 
       
        node.left = left;
        head = head.next;
     
        node.right = builtTree(mid + 1, end); 
        
        return node;     
    }
    
    return builtTree(0, size - 1);   
};


const findSize = function(head) {
    let size = 0; 
    let node = head; 
    while (node) {
        size++;
        node = node.next;
    };
    return size;
};