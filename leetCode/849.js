// brute force 
var maxDistToClosest = function(seats) {
    let res = 0;
    let left = new Array(seats.length).fill(0);
    let right = new Array(seats.length).fill(0); 
    
    left[0] = Infinity; 
    for (let i = 1; i < seats.length; i++) {
        if (seats[i] === 1) {
            left[i] = 0;
            continue;
        }
        if (seats[i-1] === 1) {
            left[i] = 1; 
        } else {
            left[i] = i-1 !== 0 ? left[i-1] + 1 : 2;
        };  
    }; 
    
    right[right.length-1] = Infinity; 
    for (let i = right.length-2; i >= 0; i--) {
        if (seats[i] === 1) {
            right[i] = 0; 
            continue;
        }
        if (seats[i+1] === 1) {
            right[i] = 1;
        } else {
            right[i] = i + 1 !== right.length -1 ? right[i+1] + 1 : 2;
        }; 
    }; 
    
    for (let i = 0; i < seats.length; i++) {
        let dist = Math.min(right[i],left[i]);
        res = Math.max(res, dist);
    };
    
 
    return res;
};