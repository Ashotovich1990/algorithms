var reverse = function(x) {
    let result = 0;
    let isMinus = false;
    let digit;
    
    if (x < 0) {
        isMinus = true; 
        x = Math.abs(x);
    };
    
    while (x > 0) {
        digit = x % 10;
        x = Math.floor(x / 10);
        result *= 10;
        result += digit;
        if (result > (2**31)-1) return 0;
    };
 
    result = isMinus ? -result : result;
    
    return result;
};