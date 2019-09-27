// optimized 
class Solution {
    public static int sumNumbers(TreeNode root) {

			return helper(root, 0);

	}

	static int helper(TreeNode root, int number) {
		if (root == null) {
			return Integer.valueOf(number);
		}

		if (root.left != null && root.right != null) {
			return helper(root.left, number * 10 + root.val) + helper(root.right, number * 10 + root.val);
		} else if (root.left != null) {
			return helper(root.left, number * 10 + root.val);
		} else if (root.right != null) {
			return helper(root.right, number * 10 + root.val);
		}

		return Integer.valueOf(number * 10 + root.val);

	}
};
// brute force 
class Solution {
    ArrayList<String> paths = new ArrayList<String>();
    public int sumNumbers(TreeNode root) {
        paths = this.traverse(root);
        int res = 0;
        int i = 0;
        
        while (i < paths.size()) {
            res += Integer.parseInt(paths.get(i));
            i++;
        }
        return res;
    };
    
    public ArrayList<String> traverse(TreeNode root) {
        ArrayList<String> res = new ArrayList<String>();
        // res.add('');
        if (root != null) {
            if (root.left == null && root.right == null) {
                res.add(Integer.toString(root.val));
                return res;
            } else if (root.right == null) {
                res = traverse(root.left); 
                res.replaceAll(s -> Integer.toString(root.val).concat(s));
                return res;
            } else if (root.left == null) {
                res = traverse(root.right); 
                res.replaceAll(s -> Integer.toString(root.val).concat(s));
                return res;
            } else {
                ArrayList<String> left = traverse(root.left); 
                left.replaceAll(s -> Integer.toString(root.val).concat(s));
                    
                ArrayList<String> right = traverse(root.right); 
                right.replaceAll(s -> Integer.toString(root.val).concat(s));
                
                left.addAll(right);
                return left;
            }
        };
        return res;
    };
};