class Solution {
    var result = 0 
    
    func longestUnivaluePath(_ root: TreeNode?) -> Int {
       traverse(root: root)
       return self.result
    }
    
    func traverse(root: TreeNode?) -> Int {
        if root == nil { return 0 } 
        
        var leftPathLength = traverse(root: root!.left) 
        var rightPathLength = traverse(root: root!.right)  
        var leftDirection = 0 
        var rightDirection = 0 
        
        if var leftNode = root!.left { 
            if leftNode.val == root!.val { leftDirection = 1 + leftPathLength }
        }
        
        if var rightNode = root!.right { 
            if rightNode.val == root!.val { rightDirection = 1 + rightPathLength}
        }
        
        self.result = max(self.result, leftDirection + rightDirection)
        
        return max(leftDirection, rightDirection) 
    }
}