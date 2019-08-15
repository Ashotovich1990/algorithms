// brute force
const widthOfBinaryTree = function(root) {
    if (!root) return null;
    let queue = [root];
    let width = 1;
    let count = 0;
    while (queue.length !== count) {
        count = 0;
        let level = queue; 
        let level_width =  countLength(level);
        width = level_width > width ? level_width : width;
        queue = [];
        
            while (level.length) {
                let node = level.shift();
                if (node) {
                    queue.push(node.left);
                    queue.push(node.right);
                } else {
                    queue.push(null);
                    queue.push(null);
                    count += 2;
                }
            }
        
    }

    return width;
};

const countLength = function(array) {
    let x;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            x = i;
            break;
        }
    }; 
    let y;
    for (let j = array.length -1; j >= 0; j--) {
        if (array[j]) {
            y = j;
            break;
        }
    }; 
    return array.slice(x,y+1).length;
}
// 