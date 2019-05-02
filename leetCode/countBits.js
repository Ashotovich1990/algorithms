var countBits = function(num) {
    let res = [0];
    if (num === 0) res; 
    for (let i = 1; i <=num; i++) {
        let evenFactor = i % 2 === 0 ? 0 : 1;
        res[i] = evenFactor + res[Math.floor(i/2)]
    }
    return res;
};