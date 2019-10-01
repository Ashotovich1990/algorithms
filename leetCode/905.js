var sortArrayByParity = function(A) {
    let res = new Array(A.length); 
    let i = 0; 
    let j = res.length-1;
    
    A.forEach(num => {
        if (num % 2 === 0) {
            res[i] = num;
            i++;
        } else {
            res[j] = num;
            j--;
        };
    });
    
    return res;
};