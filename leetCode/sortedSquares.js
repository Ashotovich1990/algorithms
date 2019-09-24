var sortedSquares = function(A) {
    let stack = []; 
    let res = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0) {
          stack.push(A[i]);  
        }  else {
            if (!stack.length || A[i] < Math.abs(stack[stack.length-1])) {
                A[i] *= A[i];
                res.push(A[i]);
            } else if (A[i] >= Math.abs(stack[stack.length-1])) {
                stack[stack.length-1] *= stack[stack.length-1];
                res.push(stack.pop());
                i--;
            }
        }
    }
    
    for (let i = stack.length-1; i >= 0; i--) {
        stack[i] *= stack[i];
        res.push(stack[i]);
    }
 
    return res;
};