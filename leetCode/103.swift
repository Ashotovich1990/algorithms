class Solution {
    func zigzagLevelOrder(_ root: TreeNode?) -> [[Int]] {
        if (root == nil) { return [] }
        var result: [[Int]] = []
        var fromLeftToRight = true 
        var level: [TreeNode] = [root!]
        
        while level.count > 0 {
            var nextLevel: [TreeNode] = []
            var levelValues: [Int] = []
            while level.count > 0 {
                var node = level[0]
                level.removeFirst(1)
                if fromLeftToRight == true {
                    levelValues.append(node.val)
                } else {
                    levelValues.insert(node.val, at: 0)
                }
                if let left = node.left { nextLevel.append(left) }
                if let right = node.right { nextLevel.append(right) } 
            }
            fromLeftToRight = !fromLeftToRight
            result.append(levelValues);
            level = nextLevel
        }
        
        return result
    }
}