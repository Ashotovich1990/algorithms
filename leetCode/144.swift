class Solution {
    var result = [Int]()
    
    func preorderTraversal(_ root: TreeNode?) -> [Int] {
        self.traverse(root: root)
        return self.result
    }
    
    func traverse(root: TreeNode?) {
         if root == nil {
            return 
        } else {
            self.result.append(root!.val)
            preorderTraversal(root!.left)
            preorderTraversal(root!.right)
        }
    }
}