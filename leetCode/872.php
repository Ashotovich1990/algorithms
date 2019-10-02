class Solution {
     public $queue = [];
    /**
     * @param TreeNode $root1
     * @param TreeNode $root2
     * @return Boolean
     */
    function leafSimilar($root1, $root2) {
        $this->traverseFirst($root1);
        $this->traverseSecond($root2);
        return !sizeof($this->queue);
    }
    
    function traverseFirst($root) {
            if (!$root) return;
            if (!$root->left && !$root->right)  array_push($this->queue,$root->val);
            $this->traverseFirst($root->left);
            $this->traverseFirst($root->right);
    }
        
    function traverseSecond($root) {
        if (!$root) return;
        if (!$root->left && !$root->right) {
            if ($root->val === $this->queue[0]) array_shift($this->queue);
        };
        $this->traverseSecond($root->left);
        $this->traverseSecond($root->right);
    }

}