class Solution {
    int res = 0;
    public int rangeSumBST(TreeNode root, int L, int R) {
        this.traverse(root, L, R);
        return res;
    }  
    
    public void traverse(TreeNode root, int L, int R) {
        if (root != null) {
            if (root.val <= R && root.val >= L) {
                this.res += root.val;
                this.traverse(root.right, L, R);
                this.traverse(root.left, L, R);
            } else if (root.val < L) {
                this.traverse(root.right, L, R);
            } else {
                this.traverse(root.left, L, R);
            }
        }
    }
}