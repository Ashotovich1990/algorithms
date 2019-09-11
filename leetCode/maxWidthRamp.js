// brute force 

var maxWidthRamp = function(A) {
    let res = 0;
    for (let i = 0; i < A.length-1; i++) {
        for (let j = i+1; j < A.length; j++) {
            if (A[j] >= A[i] && j - i > res) res = j -i;
        };
    };
    return res;
};


//dp solution 

var maxWidthRamp = function(A) {
    let dp = new Array(A.length);
    dp[0] = 0;
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < i; j++) {
            if (j === i - 1 && A[j] > A[i]) {
                dp[i] = dp[i-1];
                break;
            }
            if (A[j] <= A[i]) {
                dp[i] = i-j > dp[i-1] ? i-j : dp[i-1];
                break;
            };
        };
    };
    
    return dp[dp.length-1];
};

// stack and b-search

var maxWidthRamp = function(A) {
    let stack = []; 
    let res = 0;
    for (let i = 0; i < A.length; i++) {
        if (stack.length && A[stack[stack.length-1]] <= A[i]) {
            let j = findIdx(A,stack,A[i]);
            res = res < i - j ? i - j : res;
        } else {
            stack.push(i);
        };
    };
    
    return res;
};

const findIdx = function(A,stack,value) {
    if (!stack.length) return;
    if (A[stack[0]] <= value) return stack[0]
    let mid = Math.floor(stack.length/2);
    if (value < A[stack[mid]]) {
        let left = stack.slice(mid);
        return findIdx(A,left,value); 
    } else {
        return findIdx(A,stack.slice(1,mid+1),value)
    }
   
}

// or 
function findTheMax (stack, A, index) {
    let start = 0;
    let end = stack.length - 1;
    while (start < end) {
        const mid = parseInt((start + end) / 2);
        if (A[index] < A[stack[mid]]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return stack[start];
}