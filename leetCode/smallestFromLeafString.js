const smallestFromLeaf = function(root) {
    let paths = [""];
    let alp = getLetters(); 
    
    const traverse = function(root) {
        if (!root) return []; 
        let letter = alp[root.val];
        if (!root.left && !root.right) return [letter];
        
        let left = traverse(root.left);
        let right = traverse(root.right);
        if (!root.left) {
            right = right.map(el => el+letter);
            return right;
        } else if (!root.right) {
            left = left.map(el => el + letter);
            return left;
        } else {
            right = right.map(el => el+letter);
            left = left.map(el => el + letter);
            return [...left,...right];
        }; 
    };
    
    paths = traverse(root);
    console.log(paths)
    return paths.sort((a,b) => a.localeCompare(b))[0];
    
};

const getLetters = function() {
    let res = {};
    let letterNum = 97;
    
    for (let i = 0; i <= 25; i++) {
        res[i] = String.fromCharCode(letterNum);
        letterNum++;
    };
    
    return res;
}