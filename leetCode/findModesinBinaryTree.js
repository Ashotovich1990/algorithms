var findMode = function(root) {
    if (!root) return [];
    let count = {};
    const traverse = function(root) {
        if (!root) return; 
        count[root.val] = !count[root.val] ?  1 : count[root.val] + 1;
        traverse(root.left);
        traverse(root.right);
    }
    
    const maxArray = function(obj) { 
        let res = [];
        let max;
        for (let key in obj) {
            if (!max) max = key;
            if (obj[max] < obj[key]) max = key;     
        }
         for (let key in obj) {
            if (obj[max] === obj[key]) res.push(key);
        }
        return res;
    }
    
    traverse(root);
    return maxArray(count);
};