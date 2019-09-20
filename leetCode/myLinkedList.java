class TreeNode {
    int val;
    TreeNode next;
    
    public TreeNode() {
        
    }
    
    public TreeNode(int val) {
        this.val = val;
    }
}

class MyLinkedList {
        TreeNode head;

    /** Initialize your data structure here. */
    public MyLinkedList() {
        
    }
    
    public MyLinkedList(int val) {
        this.head = new TreeNode(val);
    }
    
    /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
    public int get(int index) {
        int i = 0; 
        TreeNode node = this.head;
        while (node != null && i <= index) {
            if (i == index) return node.val;
            node = node.next;
            i++;
        }
        return -1;
    }
    
    /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    public void addAtHead(int val) {
        TreeNode node = new TreeNode(val);
        node.next = this.head;
        this.head = node;
    }
    
    /** Append a node of value val to the last element of the linked list. */
    public void addAtTail(int val) {
        TreeNode node = this.head;
        
        while (node != null && node.next != null) {
            node = node.next;
        };
        
        node.next = new TreeNode(val);
    }
    
    /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    public void addAtIndex(int index, int val) {
        if (index < 0) {
            TreeNode node = new TreeNode(val);
            node.next = this.head;
            this.head = node;
        }
        TreeNode dummy = new TreeNode(); 
        TreeNode node = this.head;
        dummy.next = node; 
        TreeNode prev = dummy; 
        int i = 0; 

        while (node != null && i < index) {
            // System.out.println(node.val);
            prev = node;
            node = node.next;
            i++;
        };

        if (node == null && i == index) {
            prev.next = new TreeNode(val);
        } else if (node != null) {
            prev.next = new TreeNode(val);
            prev.next.next = node;
        };
        this.head = dummy.next;
    }
    
    /** Delete the index-th node in the linked list, if the index is valid. */
    public void deleteAtIndex(int index) {
        TreeNode dummy = new TreeNode(); 
        TreeNode node = this.head;
        dummy.next = node; 
        TreeNode prev = dummy; 
        int i = 0; 

        while (node != null && i < index) {
            prev = node;
            node = node.next;
            i++;
        };

        if (i == index && node != null) {
            prev.next = node.next;
            node.next = null;
        };
        this.head = dummy.next;
    }
}