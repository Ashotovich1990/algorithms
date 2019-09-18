var buddyStrings = function(A, B) {
    if (A.length !== B.length) return false;
    
    if (A === B) {
        let seen = new Set();
        for (let i = 0; i < A.length; i++) {
            if (seen.has(A[i])) return true;
            seen.add(A[i]);
        };
        return false;
    }; 
    
    let pairs = [];
    
    for (let i = 0; i < A.length; i++) {
        if (pairs.length > 2) return false;
        if (A[i] !== B[i]) pairs.push([A[i],B[i]]);
    }; 
    
    return pairs.length === 2 && pairs[0][0] === pairs[1][1] && pairs[0][1] === pairs[1][0]; 
};