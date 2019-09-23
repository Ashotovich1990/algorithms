var sortedSquares = function(A) {
    let queue = []; 
    let res = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
          queue.push(A[i]);  
        }  else {
            if (!queue.length || A[i] < Math.abs(queue[queue.length-1])) {
                A[i] *= A[i];
                res.push(A[i]);
            } else if (A[i] >= Math.abs(queue[queue.length-1])) {
                queue[queue.length-1] *= queue[queue.length-1];
                res.push(queue.pop());
                i--;
            }
        }
    }
    
    for (let i = queue.length-1; i >= 0; i--) {
        queue[i] *= queue[i];
        res.push(queue[i]);
    }
 
    return res;
};