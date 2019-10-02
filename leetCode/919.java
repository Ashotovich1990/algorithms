/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class CBTInserter {
    TreeNode head;

    public CBTInserter(TreeNode root) {
        this.head = root;
    }
    
    public int insert(int v) {
        ArrayList<TreeNode> queue = new ArrayList<TreeNode>();
        queue.add(this.head);
        while (queue.size() > 0) {
            ArrayList<TreeNode> nextLevel = new ArrayList<TreeNode>();
            while (queue.size() > 0) {
                TreeNode node = queue.remove(0);
                if (node.left == null) {
                    node.left = new TreeNode(v);
                    return node.val;
                } else if (node.right == null) {
                    node.right = new  TreeNode(v);
                    return node.val;
                } else {
                    nextLevel.add(node.left);
                    nextLevel.add(node.right);
                };
            };
            queue = nextLevel;
        }; 
        return -1;
    }
    
    // public int insert(int v, TreeNode node) {
    //    if (node.left == null) {
    //        node.left = new TreeNode(v);
    //        return v;
    //    } else if(node.right == null) {
    //        node.right = new TreeNode()
    //    }
    // }
    
    public TreeNode get_root() {
        return this.head;
    }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * CBTInserter obj = new CBTInserter(root);
 * int param_1 = obj.insert(v);
 * TreeNode param_2 = obj.get_root();
 */