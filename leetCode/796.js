var rotateString = function(A, B) {
    if (A.length != B.length) return false; 
    
    A += A;
    
    return A.includes(B);
};