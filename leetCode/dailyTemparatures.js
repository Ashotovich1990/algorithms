// using stack 
var dailyTemperatures = function(T) {
    let res = new Array(T.length); 
    res[res.length-1] = 0;
    
    let stack = [0]; 
    let i = 1; 
    while (i < T.length) {
        while (stack.length && T[i] > T[stack[stack.length-1]]) {
            let idx = stack.pop();
            res[idx] = i-idx;
        };   
        stack.push(i);  
        i++;
    };
    
    while (stack.length) {
        let idx = stack.pop();
        res[idx] = 0;
    };
    
    return res;
};

// brute force
var dailyTemperatures = function(T) {
    let res = new Array(T.length); 
    
    for (let i = 1; i < T.length; i++) {
        if (i === T.length - 1) res[i] = 0; 
        if (T[i] > T[i-1]) {
            res[i-1] = 1;
        } else {
            let j = i+1;
            while (j < T.length) {
                if (T[j] > T[i-1]) {
                    res[i-1] = j-i+1;
                    break;
                };
                j++;
            };
            if (j === T.length) res[i-1] = 0;
        };
    }; 
    
    return res;
};