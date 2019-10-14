const largestSumAfterKNegations = function(A, K) {
    
    A.sort((a,b) => a-b);
    
    let i = 0;
    while (i < A.length && A[i] < 0 && K > 0) {
        A[i] = -A[i]
        i++;
        K--;
    };
    
    let min = 0;
    let sum = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] < A[min]) min = i;
        sum += A[i];
    }; 
    
    if (K > 0 && K % 2 != 0) {
        sum -= A[min];
        A[min] = -A[min];
        sum += A[min];
    };
        
    return sum;
};