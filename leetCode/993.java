class Solution {
    HashMap<Integer, int[]> nodeDepthAndParentValue = new HashMap<Integer, int[]>();
        
    public boolean isCousins(TreeNode root, int x, int y) {
        
        this.traverse(root, root, 1, x, y);
    
        return (this.nodeDepthAndParentValue.get(x)[0] == this.nodeDepthAndParentValue.get(y)[0] && this.nodeDepthAndParentValue.get(x)[1] != this.nodeDepthAndParentValue.get(y)[1]);
        
    }
    
     public void traverse(TreeNode root, TreeNode parent, int depth, int x, int y) {
            if (root == null) return;
            if (root.val == x || root.val == y) {
                int[] value = new int[2];
                value[0] = depth;
                value[1] = parent.val;
                this.nodeDepthAndParentValue.put(root.val, value);
            };
            this.traverse(root.left, root, depth +1, x, y);
            this.traverse(root.right, root, depth +1, x, y);
        }; 
}