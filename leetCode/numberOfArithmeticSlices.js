const numberOfArithmeticSlices = function(A) {
    if (A.length < 3)  return 0; 
    let k = A[1] - A[0];
    let res = []; 
    let sub = 2;
    for (let i = 2; i < A.length; i++) {
        if (A[i] - A[i-1] === k) {
            sub += 1;
        } else {
            if (sub >= 3) {
                res.push(sub);     
            }
            sub = 2; 
            k = A[i] - A[i-1]
        }
    }
    if (sub >= 3) res.push(sub);
 
    res = res.length ?  res.map(el => Math.floor((el- 2)*(el - 1)/2)).reduce((sum,el) => sum += el) : 0
    return res;
};