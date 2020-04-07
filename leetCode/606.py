class Solution:
    def tree2str(self, t: TreeNode) -> str:
        result = ''
        if not t:
            return result
        
        result += f'{t.val}'
        
        left = self.tree2str(t=t.left)
        right = self.tree2str(t=t.right)
        
        if not right and not left:
            return result
        elif not right:
            result += f'({left})'
        else:
            result += f'({left})' + f'({right})'
            
        return result