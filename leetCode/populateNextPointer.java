public Node connect(Node root) {
        if (root == null) {
            return root;
        }
        
        Node node = root; 
        
        while (node != null) {
            Node dummy = new Node();
            Node current = dummy;
            while (node != null) {
                if (node.left != null) {
                    current.next = node.left;
                    current = current.next;
                };
                if (node.right != null) {
                    current.next = node.right;
                    current = current.next;
                };
                
                node = node.next;
            };
            
            node = dummy.next;
        };
        
        return root;
    }