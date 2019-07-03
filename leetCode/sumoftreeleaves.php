function sumOfLeftLeaves($root, $isLeft = false) {
        if (!$root) return 0; 
        if (!$root->left && !$root->right && $isLeft) return $root->val; 
        return $this->sumOfLeftLeaves($root->left, true) + $this->sumOfLeftLeaves($root->right, false);
    }