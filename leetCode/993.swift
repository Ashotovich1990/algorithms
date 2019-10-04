class Solution {
    func isCousins(_ root: TreeNode?, _ x: Int, _ y: Int) -> Bool {
        if root == nil {
            return false
        } else {
            let firstValue = self.traverse(root: root, parent: root!, value: x, depth: 1)
            let secondValue = self.traverse(root: root, parent: root!, value: y, depth: 1)
            if firstValue != nil && secondValue != nil {
                return firstValue![0] == secondValue![0] && firstValue![1] != secondValue![1]
            } else {
                return false
            }
        }
    }
    
    func traverse(root: TreeNode?, parent: TreeNode, value: Int, depth: Int) -> [Int]? {
        if root == nil {
            return nil
        } else if root!.val == value {
            return [depth, parent.val]
        } else {
            if let res = self.traverse(root: root!.left, parent: root!, value: value, depth: depth + 1) {
              return res;  
            } else {
                return self.traverse(root: root!.right, parent: root!, value: value, depth: depth + 1)
            }
            
        }
    }
}