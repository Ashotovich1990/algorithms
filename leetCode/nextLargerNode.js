const nextLargerNodes = function (head) {
    let res = [];
    let stack = [];
    let node = head;
    let i = 0;
    while (node) {
        while (stack.length && node.val > stack[stack.length-1].val) {
            res[stack.pop().index] = node.val;
        }; 
        stack.push({
            'index' : i,
             'val' : node.val
        });
        node = node.next;
        i++;
    }; 
    stack.forEach(el => res[el.index] = 0);
    return res;
}; 



// var nextLargerNodes = function(head) { 
//     let values = [];
//     let node = head;
//     while (node) {
//         values.push(node.val);
//         node = node.next;
//     }; 
    
//     let res = new Array(values.length).fill(0);
//     let i = 1; 
//     let j = 0;
//     while (j < values.length) {
//         i = j+1;
//         while (i < values.length) {
//            if (values[i] > values[j]) {
//                res[j] = values[i];
//                j++;
//                i = j+1;
//            } else {
//                i++;
//            }
//         };
//         j++;
//     }
    
//     return res;
    
// };