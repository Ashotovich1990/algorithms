 public List<Integer> preorder(Node root) {
        List<Integer> res = new ArrayList<Integer>();
        
        List<Node> stack = new ArrayList<Node>();
        Node node = root; 
        while (node != null) {
            res.add(node.val); 
            int i = node.children.size() - 1; 
            while (i >= 0) {
                stack.add(node.children.get(i));
                i--;
            };
            int idx = stack.size() - 1;
            node = idx < 0 ? null : stack.remove(idx);
        };
        
        return res;
    }