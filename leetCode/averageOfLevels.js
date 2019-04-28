const averageOfLevels = (root) => {
    let res = [];
    let queue = [root];
    let temp = [];
 
    while (queue.length) {
        let sum = 0; 
        let count = 0 
        
        while (queue.length) {
            let node = queue.shift(); 
            sum += node.val; 
            count++;
            if (node.left) temp.push(node.left);
            if (node.right) temp.push(node.right);
        }
        res.push(sum/count); 
        queue = temp;
        temp = [];
    }
    return res;
}



// var averageOfLevels = function(root) {
//     let levelVals = gatherLevels(root);
//     let levels = {}; 
//     levelVals.forEach(level => {
//         levels[level[0]] = levels[level[0]] ? levels[level[0]] : new Array();
//         levels[level[0]].push(level[1]);
//     })
//     let res = new Array(levelVals.length - 1);
    
//     for (let level in levels) {
//         let sum = 0;
//         levels[level].forEach(el => sum += el);
//         res[level] = sum/ levels[level].length;
//     }
    
//     return res;
// };

// var gatherLevels = function(root, level = 0) {
//     if (!root) return [];
//     let y = gatherLevels(root.left, level+ 1); 
//     let x = gatherLevels(root.right, level+ 1);
//     let res = [[level, root.val]].concat(x).concat(y);
//     return res
// }