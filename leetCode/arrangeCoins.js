var arrangeCoins = function(n) {
    let i = 0; 
    
    while (i <= n) {
        n -= i; 
        i++;
    }
    
    return --i;
};