/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    List<Integer> result = new ArrayList<Integer>(); 
   
    public List<Integer> distanceK(TreeNode root, TreeNode target, int K) {
        
        if (K == 0) {
            this.result.add(target.val);
            return this.result;
        }
        
        if (root == target) {
            this.gatherNodes(target, K, 0);
            return this.result;
        } 
        
        if (root == null) {
            return this.result;
        }
        
        boolean isToLeft = this.isTargetToLeft(root.left, target);
        
        if (root.right != null) System.out.println(root.right.val);
        
        int distanceFromRootToNode = countDistanceFromRoot(root, target.val, 0);
        
        if (K == distanceFromRootToNode) this.result.add(root.val);
        
        if (distanceFromRootToNode <  K) {
            if (isToLeft == true) this.gatherNodes(root.right, K - distanceFromRootToNode - 1, 0);
            if (isToLeft == false) this.gatherNodes(root.left, K - distanceFromRootToNode - 1, 0);    
        }
        
        if (isToLeft == true) this.distanceK(root.left, target, K);
        if (isToLeft == false) this.distanceK(root.right, target, K);
                
        return  this.result;
    }
    
    public boolean isTargetToLeft(TreeNode root, TreeNode target) {
        if (root == null) return false; 
        if (root.val == target.val) return true;
       return this.isTargetToLeft(root.left, target) || this.isTargetToLeft(root.right, target);
    }
 
    public void gatherNodes(TreeNode node, int K, int distance) {
        if (node == null) return;
        if (distance > K) return;
        if (K == distance) this.result.add(node.val);
        this.gatherNodes(node.left, K, distance + 1);
        this.gatherNodes(node.right, K, distance + 1);
    }
    
     public int countDistanceFromRoot(TreeNode node, int value, int distance) {
        if (node == null) return -1;
        if (node.val == value) return distance;
        int result = countDistanceFromRoot(node.left, value, distance + 1);
        return result == -1 ? countDistanceFromRoot(node.right, value, distance +1) : result;
    }
    
}