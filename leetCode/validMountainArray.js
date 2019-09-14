var validMountainArray = function(A) {
    if (A.length < 3) return false; 
    if (A[1] <= A[0]) return false; 
    if (A[A.length-1] >= A[A.length-2]) return false;
    
    let increasing = true; 
    for (let i = 1; i < A.length; i++) {
        if (A[i] === A[i-1]) return false;
        if (increasing && A[i] < A[i-1]) increasing = false;
        if (!increasing && A[i] > A[i-1]) return false;
    };
    
    return true;  
};

// or 
var validMountainArray = function(A) {
    let l = A.length;
    let i = 0; 
    
    while (i < l && A[i] < A[i+1]) {
        i++;
    };
    
    if (i === 0 || i === l - 1) return false;
    
     while (i < l && A[i] > A[i+1]) {
        i++;
    };
    
    return i === l - 1;   
};