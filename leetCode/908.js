const smallestRangeI = function(A, K) {
    let min = A[0];
    let max = A[0]; 
    
    for(let i = 0; i < A.length; i++) {
        if (A[i] < min) min = A[i];
        if (A[i] > max) max = A[i];
    };
    
    if (max - min < 2*K)  return 0;
    return (max-K) - (min + K);
};