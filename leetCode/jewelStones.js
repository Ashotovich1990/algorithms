var numJewelsInStones = function(J, S) {
    let hash = {};
    let res = 0;
    for (let i = 0; i < J.length; i++) {
        hash[J[i]] = true;
    }; 
    
    for (let i = 0; i < S.length; i++) {
        if (hash[S[i]]) {
            res++;
        };
    };
    
    return res;
};